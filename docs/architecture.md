# Googoo Client - 아키텍처 가이드

## 목차

1. [개념과 격벽](#1-개념과-격벽)
2. [소프트웨어 레이어](#2-소프트웨어-레이어)
3. [모듈화](#3-모듈화)
4. [폴더 구조](#4-폴더-구조)
5. [규칙 요약](#5-규칙-요약)

---

## 1. 개념과 격벽

### 개념 (Concept)

시스템의 특정 기능을 나타내는 추상적인 단위 또는 도메인 객체.

- 개념은 **독립적으로 변경될 수 있는 단위**다.
- 하나의 개념이 변경되었을 때, 해당 개념과 관련된 코드만 수정되어야 한다.
- **상태나 행위를 개념으로 착각하지 않는다.** 개념이 상태에 표기되는 것이지, 상태가 개념이 아니다.

#### 개념이 너무 클 때의 신호

- 하나의 개념을 수정했는데 여러 곳이 영향을 받는다.
- 개념 안에 서로 다른 생명주기를 가진 기능이 섞여 있다.
- 개념 내부의 복잡성이 계속 증가한다.

### 격벽 (Wall)

개념들 사이의 경계로, 접근 제어 및 통제 역할을 한다.

- 격벽은 **개념 간의 책임 범위를 명확히 분리**한다.
- 한 개념의 변경이 다른 개념에 미치는 영향을 줄인다.
- 격벽이 잘못 설정되면, 전혀 다른 개념의 코드가 수정되거나 같은 개념 내에서도 복잡성이 증가한다.

#### 격벽을 세우는 시점

- 하나의 개념이 많이 쓰이면 → 분리를 검토한다.
- 상태에 의해 개념이 생기면 → 격벽을 세워본다.
- 개념을 분리하고 나면 → 흐름이 다른 관점으로 보일 수 있다.

### 프론트엔드에서의 개념과 격벽

프론트엔드의 개념 예시:

| 큰 개념 (분리 전) | 격벽으로 분리한 개념들 |
|---|---|
| 사용자 | 인증(auth), 프로필(profile), 설정(settings) |
| 상품 | 상품 목록(product-list), 상품 상세(product-detail), 장바구니(cart) |
| 주문 | 주문 작성(order-create), 결제(payment), 주문 내역(order-history) |

**격벽의 구현** = `index.ts` 파일이 격벽의 문이다.

```typescript
// features/auth/index.ts ← 격벽의 유일한 출입구
export { LoginService } from './services/login-service';
export type { AuthUser, LoginRequest } from './models/auth.types';

// tools/는 외부에 노출하지 않음 → 격벽 안쪽의 상세 구현
```

```typescript
// ✅ 격벽의 문을 통해 접근
import { LoginService } from '$lib/features/auth';

// ❌ 격벽을 뚫고 내부 도구에 직접 접근 금지
import { TokenReader } from '$lib/features/auth/tools/token-reader';
```

---

## 2. 소프트웨어 레이어

### 핵심 원칙

**"상세 구현을 몰라도 비즈니스 흐름을 이해할 수 있는 코드"**

- Service는 비즈니스의 흐름을 보여주는 **중계자(Coordinator)** 역할만 한다.
- 실제 작업은 명확한 단일 책임을 가진 **도구 클래스(Tool Classes)** 에 위임한다.

### 레이어 구조

```
┌─────────────────────────────────────────────────┐
│  Presentation Layer (routes/)                   │
│  외부와 맞닿는 영역: URL, 페이지 진입점,           │
│  요청/응답 처리, 외부 변화에 민감한 영역             │
├─────────────────────────────────────────────────┤
│  Business Layer (services/)                     │
│  비즈니스 흐름을 중계하는 영역                      │
│  구현 기술이나 구현 로직을 모르는 상태로 유지          │
│  로직이 많아지면 상위 레이어를 더 쌓아올린다           │
├─────────────────────────────────────────────────┤
│  Implement Layer (tools/)                       │
│  상세 구현 로직을 가진 도구 클래스들                  │
│  재사용성이 높은 핵심 레이어                         │
│  reader, validator, writer, formatter 등          │
├─────────────────────────────────────────────────┤
│  Data Access Layer (api/)                       │
│  외부 자원에 접근하는 기능 제공                      │
│  기술 의존성을 격리하여 순수한 인터페이스 제공          │
└─────────────────────────────────────────────────┘
```

### 레이어 제약 규칙

1. **단방향 참조**: 위에서 아래로만 참조한다.
   ```
   Presentation → Business → Implement → Data Access
   ```

2. **역류 금지**: 하위 레이어가 상위 레이어를 참조할 수 없다.
   ```
   ❌ tools/token-reader.ts → services/login-service.ts
   ```

3. **건너뛰기 금지**: 중간 레이어를 건너뛰고 하위 레이어를 직접 참조할 수 없다.
   ```
   ❌ services/login-service.ts → api/auth.api.ts  (tools/를 건너뜀)
   ```

4. **동일 레이어 참조 금지**: 같은 레이어의 클래스끼리는 서로 참조하지 않는다.
   - **예외**: Implement Layer(tools/) 내에서는 도구 간 재사용과 조합을 허용한다.

### 프론트엔드에서 레이어가 얇을 때

프론트엔드는 백엔드에 비해 비즈니스 로직이 적다. 그러나 **레이어 자체를 없애지 않는다.**

- Business Layer(services/)가 얇더라도 **흐름을 보여주는 중계자 역할은 유지**한다.
- 나중에 복잡해져도 구조가 흔들리지 않는다.
- 얇은 것은 문제가 아니다. 격벽이 없는 것이 문제다.

---

## 3. 모듈화

### 핵심 원칙

기술 의존성을 격리하고 모듈 간 결합도를 낮추어 변경에 유연한 구조를 만든다.

### 프론트엔드에서의 모듈화

- `api/` 모듈은 HTTP 기술(fetch, axios 등)을 격리한다.
  - `tools/`는 데이터가 어떤 HTTP 라이브러리로 오는지 모른다.
  - `api/`의 내부 구현이 바뀌어도 `tools/`는 수정하지 않는다.

- `features/` 각 디렉토리는 독립된 모듈처럼 동작한다.
  - 외부에는 `index.ts`를 통해서만 공개한다.
  - 내부 구현(`tools/`, `models/`)은 은닉한다.

### 중요: 모듈 ≠ 레이어 ≠ 개념

이 세 가지는 **절대 1:1 대칭으로 구분하지 않는다.**

| 구분 | 역할 | 예시 |
|---|---|---|
| **개념** | 비즈니스 도메인의 추상적 단위 | 인증, 결제, 상환 |
| **격벽** | 개념 간의 경계와 접근 통제 | index.ts의 export |
| **레이어** | 코드의 책임 깊이 분리 | presentation, business, implement, data access |
| **모듈** | 기술 의존성 격리 단위 | api/, features/auth/ |

---

## 4. 폴더 구조

```
src/
├── routes/                              # [Presentation Layer]
│   │                                    # 외부와 맞닿는 영역
│   │                                    # SvelteKit 라우트 = 페이지 진입점
│   ├── (auth)/
│   │   ├── login/+page.svelte
│   │   └── signup/+page.svelte
│   ├── (main)/
│   │   └── +page.svelte
│   ├── +layout.svelte
│   └── layout.css
│
├── lib/
│   ├── features/                        # [개념별 격벽 단위]
│   │   │                                # 각 디렉토리 = 하나의 개념
│   │   │                                # index.ts = 격벽의 문
│   │   │
│   │   ├── auth/                        # ── 격벽: 인증 ──
│   │   │   ├── services/                #   [Business Layer]
│   │   │   │   └── login-service.ts     #   흐름 중계만 담당
│   │   │   ├── tools/                   #   [Implement Layer]
│   │   │   │   ├── token-reader.ts      #   도구: 읽기
│   │   │   │   ├── credential-validator.ts  # 도구: 검증
│   │   │   │   └── session-writer.ts    #   도구: 쓰기
│   │   │   ├── models/                  #   도메인 모델, 타입
│   │   │   │   └── auth.types.ts
│   │   │   ├── components/              #   이 개념 전용 UI 컴포넌트
│   │   │   │   └── LoginForm.svelte
│   │   │   └── index.ts                 #   격벽의 문 (공개 인터페이스)
│   │   │
│   │   └── [other-concept]/             # ── 격벽: 다른 개념 ──
│   │       ├── services/
│   │       ├── tools/
│   │       ├── models/
│   │       ├── components/
│   │       └── index.ts
│   │
│   ├── api/                             # [Data Access Layer]
│   │   │                                # 기술 의존성 격리
│   │   │                                # HTTP 클라이언트 래핑
│   │   ├── client.ts                    # fetch/axios 등 기술 격리
│   │   ├── auth.api.ts                  # 인증 관련 엔드포인트
│   │   └── [concept].api.ts             # 개념별 API 파일
│   │
│   ├── components/                      # 공유 UI 컴포넌트
│   │   │                                # 특정 개념에 속하지 않는 범용 컴포넌트
│   │   ├── Button.svelte
│   │   ├── Modal.svelte
│   │   └── LanguageSwitcher.svelte
│   │
│   ├── i18n/                            # 인프라: 다국어
│   ├── assets/                          # 인프라: 정적 자원
│   └── index.ts
│
├── app.html
└── app.d.ts
```

### 폴더별 책임 정리

| 폴더 | 레이어 | 책임 |
|---|---|---|
| `routes/` | Presentation | URL 매핑, 페이지 진입점, 외부 변화에 민감한 영역 |
| `features/*/services/` | Business | 비즈니스 흐름 중계, 구현 기술을 모름 |
| `features/*/tools/` | Implement | 상세 구현 도구, 재사용성 높음 |
| `features/*/models/` | (Implement 보조) | 도메인 타입, 인터페이스 정의 |
| `features/*/components/` | (Presentation 보조) | 해당 개념 전용 UI 컴포넌트 |
| `api/` | Data Access | 외부 자원 접근, 기술 의존성 격리 |
| `components/` | (공유) | 개념에 속하지 않는 범용 UI 컴포넌트 |
| `i18n/`, `assets/` | (인프라) | 개념이 아닌 기반 기능 |

### 도구(tools/) 네이밍 규칙

책임이 명확한 경우:

| 접미사 | 책임 | 예시 |
|---|---|---|
| `-reader` | 데이터 읽기 | `token-reader.ts` |
| `-finder` | 데이터 검색 | `user-finder.ts` |
| `-writer` | 데이터 쓰기 | `session-writer.ts` |
| `-validator` | 데이터 검증 | `credential-validator.ts` |
| `-formatter` | 데이터 변환 | `date-formatter.ts` |
| `-generator` | 데이터 생성 | `id-generator.ts` |
| `-appender` | 데이터 추가 | `log-appender.ts` |

책임이 아직 모호한 경우 임시로 `-processor`, `-manager`를 사용하고, 이후 책임을 명확히 한다.

---

## 5. 규칙 요약

### 참조 규칙

```
✅ 허용                           ❌ 금지
─────────────────────────────     ─────────────────────────────
routes → features/*/services      tools → services (역류)
services → tools                  services → api (건너뛰기)
tools → api                       api → tools (역류)
tools → tools (같은 개념 내)       services → services (동일 레이어)
```

### 격벽 규칙

- 외부에서 개념에 접근할 때는 반드시 `index.ts`를 통한다.
- `index.ts`에 export되지 않은 것은 외부에서 접근할 수 없다.
- 다른 개념의 내부 도구(`tools/`)를 직접 import하지 않는다.

### 개념 분리 기준

- 하나의 개념이 너무 많은 곳에서 쓰이면 → 분리 검토
- 상태에 의해 새로운 흐름이 발생하면 → 격벽으로 새 개념 도출
- 변경 시 영향 범위가 해당 개념을 넘어서면 → 개념 크기 재검토
