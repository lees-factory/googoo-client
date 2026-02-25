<script lang="ts">
	import { Package } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<header class="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
	<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
		<div class="flex items-center gap-2">
			<Package class="h-6 w-6 text-[#3B82F6]" />
			<h1 class="text-[16px] font-semibold text-gray-900">{$t('nav.title')}</h1>
		</div>
		<nav class="flex items-center gap-6">
			<a href="#features" class="text-[13px] text-gray-600 hover:text-gray-900"
				>{$t('nav.features')}</a
			>
			<a href="#demo" class="text-[13px] text-gray-600 hover:text-gray-900">{$t('nav.demo')}</a>
			<a href="#faq" class="text-[13px] text-gray-600 hover:text-gray-900">{$t('nav.faq')}</a>
			<LanguageSwitcher />
			<a
				href="/popup"
				class="rounded-lg bg-[#3B82F6] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#2563EB]"
			>
				{$t('nav.demoBtn')}
			</a>
		</nav>
	</div>
</header>
