<script lang="ts">
	import { HelpCircle } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section id="faq" class="border-y border-gray-200 bg-white py-16">
	<div class="mx-auto max-w-3xl px-6">
		<div class="mb-8 flex items-center justify-center gap-2">
			<HelpCircle class="h-5 w-5 text-[#3B82F6]" />
			<h3 class="text-[20px] font-semibold text-gray-900">{$t('faq.heading')}</h3>
		</div>
		<div class="space-y-4">
			<details class="group rounded-lg border border-gray-200 bg-gray-50 p-4">
				<summary
					class="flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-gray-900"
				>
					{$t('faq.q1.question')}
					<span class="text-gray-400 transition-transform group-open:rotate-180">▼</span>
				</summary>
				<p class="mt-3 pl-1 text-[12px] text-gray-600">{$t('faq.q1.answer')}</p>
			</details>

			<details class="group rounded-lg border border-gray-200 bg-gray-50 p-4">
				<summary
					class="flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-gray-900"
				>
					{$t('faq.q2.question')}
					<span class="text-gray-400 transition-transform group-open:rotate-180">▼</span>
				</summary>
				<p class="mt-3 pl-1 text-[12px] text-gray-600">{$t('faq.q2.answer')}</p>
			</details>

			<details class="group rounded-lg border border-gray-200 bg-gray-50 p-4">
				<summary
					class="flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-gray-900"
				>
					{$t('faq.q3.question')}
					<span class="text-gray-400 transition-transform group-open:rotate-180">▼</span>
				</summary>
				<p class="mt-3 pl-1 text-[12px] text-gray-600">{$t('faq.q3.answer')}</p>
			</details>

			<details class="group rounded-lg border border-gray-200 bg-gray-50 p-4">
				<summary
					class="flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-gray-900"
				>
					{$t('faq.q4.question')}
					<span class="text-gray-400 transition-transform group-open:rotate-180">▼</span>
				</summary>
				<p class="mt-3 pl-1 text-[12px] text-gray-600">{$t('faq.q4.answer')}</p>
			</details>
		</div>
	</div>
</section>
