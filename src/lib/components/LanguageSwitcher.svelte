<script lang="ts">
	import { locale, setLocale } from '$lib/i18n';
</script>

<button
	onclick={() => setLocale($locale === 'ko' ? 'en' : 'ko')}
	class="rounded-md border border-gray-200 px-3 py-1.5 text-[12px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
	aria-label="Switch language"
>
	{$locale === 'ko' ? 'EN' : '한국어'}
</button>
