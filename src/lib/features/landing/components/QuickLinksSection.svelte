<script lang="ts">
	import { Settings, FileText } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<div class="grid gap-6 md:grid-cols-2">
		<a
			href="/options"
			class="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50"
		>
			<div class="flex items-start gap-4">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
					<Settings class="h-5 w-5 text-[#3B82F6]" />
				</div>
				<div>
					<h4
						class="mb-1 text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-[#3B82F6]"
					>
						{$t('quickLinks.settings.title')}
					</h4>
					<p class="text-[12px] text-gray-600">{$t('quickLinks.settings.desc')}</p>
				</div>
			</div>
		</a>

		<a
			href="#docs"
			class="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50"
		>
			<div class="flex items-start gap-4">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
					<FileText class="h-5 w-5 text-green-600" />
				</div>
				<div>
					<h4
						class="mb-1 text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-green-600"
					>
						{$t('quickLinks.guide.title')}
					</h4>
					<p class="text-[12px] text-gray-600">{$t('quickLinks.guide.desc')}</p>
				</div>
			</div>
		</a>
	</div>
</section>
