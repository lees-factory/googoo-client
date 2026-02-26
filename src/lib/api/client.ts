/**
 * Data Access Layer - HTTP 클라이언트
 *
 * 외부 자원에 접근하는 기술을 격리한다.
 * 상위 레이어(tools, services)는 이 클라이언트의 내부 구현(fetch, axios 등)을 모른다.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

interface RequestOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	body?: unknown;
	headers?: Record<string, string>;
}

export async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
	const { method = 'GET', body, headers = {} } = options;

	const response = await fetch(`${BASE_URL}${endpoint}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers
		},
		...(body ? { body: JSON.stringify(body) } : {})
	});

	if (!response.ok) {
		throw new Error(`API Error: ${response.status} ${response.statusText}`);
	}

	return response.json() as Promise<T>;
}
