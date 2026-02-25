<script lang="ts">
	import { Package, Calculator, CheckCircle } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section id="features" class="mx-auto max-w-5xl px-6 py-16">
	<h3 class="mb-12 text-center text-[20px] font-semibold text-gray-900">
		{$t('features.heading')}
	</h3>
	<div class="grid gap-6 md:grid-cols-2">
		<!-- Order Matching -->
		<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
				<Package class="h-6 w-6 text-[#3B82F6]" />
			</div>
			<h4 class="mb-2 text-[16px] font-semibold text-gray-900">
				{$t('features.orderMatching.title')}
			</h4>
			<p class="mb-4 text-[13px] text-gray-600">{$t('features.orderMatching.desc')}</p>
			<ul class="space-y-2">
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.orderMatching.li1')}
				</li>
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.orderMatching.li2')}
				</li>
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.orderMatching.li3')}
				</li>
			</ul>
		</div>

		<!-- Profit Calculator -->
		<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
				<Calculator class="h-6 w-6 text-green-600" />
			</div>
			<h4 class="mb-2 text-[16px] font-semibold text-gray-900">
				{$t('features.profitCalc.title')}
			</h4>
			<p class="mb-4 text-[13px] text-gray-600">{$t('features.profitCalc.desc')}</p>
			<ul class="space-y-2">
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.profitCalc.li1')}
				</li>
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.profitCalc.li2')}
				</li>
				<li class="flex items-start gap-2 text-[12px] text-gray-600">
					<CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
					{$t('features.profitCalc.li3')}
				</li>
			</ul>
		</div>
	</div>
</section>
