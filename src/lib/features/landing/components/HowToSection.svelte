<script lang="ts">
	import { Package } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section id="demo" class="border-y border-gray-200 bg-white py-16">
	<div class="mx-auto max-w-5xl px-6">
		<h3 class="mb-4 text-center text-[20px] font-semibold text-gray-900">
			{$t('howTo.heading')}
		</h3>
		<p class="mb-12 text-center text-[13px] text-gray-600">{$t('howTo.desc')}</p>
		<div class="grid gap-8 md:grid-cols-3">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-[18px] font-semibold text-white"
				>
					1
				</div>
				<h4 class="mb-2 text-[14px] font-semibold text-gray-900">{$t('howTo.step1.title')}</h4>
				<p class="text-[12px] text-gray-600">{$t('howTo.step1.desc')}</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-[18px] font-semibold text-white"
				>
					2
				</div>
				<h4 class="mb-2 text-[14px] font-semibold text-gray-900">{$t('howTo.step2.title')}</h4>
				<p class="text-[12px] text-gray-600">{$t('howTo.step2.desc')}</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-[18px] font-semibold text-white"
				>
					3
				</div>
				<h4 class="mb-2 text-[14px] font-semibold text-gray-900">{$t('howTo.step3.title')}</h4>
				<p class="text-[12px] text-gray-600">{$t('howTo.step3.desc')}</p>
			</div>
		</div>
		<div class="mt-12 text-center">
			<a
				href="/popup"
				class="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-gray-800"
			>
				<Package class="h-4 w-4" />
				{$t('howTo.demoBtn')}
			</a>
		</div>
	</div>
</section>
