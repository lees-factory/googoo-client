<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import logo from '$lib/assets/logo.png';

	let mobileMenuOpen = $state(false);

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
	<div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
		<a href="/" class="flex min-w-0 shrink-0 items-center gap-2">
			<img src={logo} alt="" class="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9" />
			<h1 class="truncate text-base font-semibold text-gray-900 sm:text-[16px]">{$t('nav.title')}</h1>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-6 md:flex">
			<a href="#features" class="text-[13px] text-gray-600 hover:text-gray-900"
				>{$t('nav.features')}</a
			>
			<a href="#faq" class="text-[13px] text-gray-600 hover:text-gray-900">{$t('nav.faq')}</a>
			<LanguageSwitcher />
		</nav>

		<!-- Mobile menu button -->
		<button
			type="button"
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
			aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
			aria-expanded={mobileMenuOpen}
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
		>
			{#if mobileMenuOpen}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</button>
	</div>

	<!-- Mobile nav panel -->
	{#if mobileMenuOpen}
		<div
			class="border-t border-gray-200 bg-white px-4 py-4 md:hidden"
			role="dialog"
			aria-label="메뉴"
		>
			<nav class="flex flex-col gap-1">
				<a
					href="#features"
					class="rounded-lg px-3 py-2.5 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-gray-900"
					onclick={closeMobileMenu}
				>
					{$t('nav.features')}
				</a>
				<a
					href="#faq"
					class="rounded-lg px-3 py-2.5 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-gray-900"
					onclick={closeMobileMenu}
				>
					{$t('nav.faq')}
				</a>
				<div class="border-t border-gray-100 px-3 py-2.5">
					<LanguageSwitcher />
				</div>
			</nav>
		</div>
	{/if}
</header>
