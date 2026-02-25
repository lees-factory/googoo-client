<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section class="mx-auto max-w-5xl px-6 py-20 text-center">
	<div
		class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
	>
		<span class="text-[11px] font-medium text-blue-700">{$t('hero.badge')}</span>
	</div>
	<h2 class="mb-4 text-[32px] font-semibold text-gray-900">
		{$t('hero.headingLine1')}<br />{$t('hero.headingLine2')}
	</h2>
	<p class="mx-auto mb-8 max-w-xl text-[15px] text-gray-600">
		{$t('hero.desc')}
	</p>
	<div class="flex items-center justify-center gap-4">
		<button
			class="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-[#2563EB]"
		>
			<Download class="h-4 w-4" />
			{$t('hero.addToChrome')}
		</button>
		<a
			href="/popup"
			class="rounded-lg border border-gray-200 bg-white px-6 py-3 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-50"
		>
			{$t('hero.webDemo')}
		</a>
	</div>
</section>
