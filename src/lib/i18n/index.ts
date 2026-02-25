import { writable, derived } from 'svelte/store';
import ko from './locales/ko';
import en from './locales/en';

export type Locale = 'ko' | 'en';

const locales: Record<Locale, object> = { ko, en };

export const locale = writable<Locale>('ko');

/** Call once on client mount.
 *  Priority: 1) localStorage  2) browser language  3) 'en' */
export function initLocale() {
	if (typeof window === 'undefined') return;
	const saved = localStorage.getItem('locale');
	if (saved === 'ko' || saved === 'en') {
		locale.set(saved);
		return;
	}
	const browserLang = navigator.language ?? navigator.languages?.[0] ?? '';
	locale.set(browserLang.startsWith('ko') ? 'ko' : 'en');
}

export function setLocale(l: Locale) {
	locale.set(l);
	if (typeof window !== 'undefined') localStorage.setItem('locale', l);
}

/** Dot-notation key lookup, e.g. t('nav.title') */
function resolve(msgs: object, key: string): string {
	const parts = key.split('.');
	let cur: unknown = msgs;
	for (const part of parts) {
		if (cur == null || typeof cur !== 'object') return key;
		cur = (cur as Record<string, unknown>)[part];
	}
	return typeof cur === 'string' ? cur : key;
}

export const t = derived(locale, ($locale) => (key: string) => resolve(locales[$locale], key));
