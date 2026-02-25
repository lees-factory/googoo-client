<script lang="ts">
	import {
		Package,
		Calculator,
		Download,
		CheckCircle,
		Settings,
		FileText,
		HelpCircle
	} from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<div class="min-h-screen bg-linear-to-b from-[#F7F8FA] to-white">
	<!-- Header -->
	<header class="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
		<div class="mx-auto grid max-w-5xl grid-cols-3 items-center px-6 py-3">
			<!-- Left: nav links -->
			<nav class="flex items-center gap-6">
				<a href="#features" class="text-[13px] text-gray-600 hover:text-gray-900"
					>{$t('nav.features')}</a
				>
				<a href="#demo" class="text-[13px] text-gray-600 hover:text-gray-900">{$t('nav.demo')}</a>
				<a href="#faq" class="text-[13px] text-gray-600 hover:text-gray-900">{$t('nav.faq')}</a>
			</nav>

			<!-- Center: logo -->
			<div class="flex justify-center">
				<a href="/">
					<img src={logo} alt={$t('nav.title')} class="h-9 w-auto object-contain" />
				</a>
			</div>

			<!-- Right: language switcher + CTA -->
			<div class="flex items-center justify-end gap-3">
				<LanguageSwitcher />
				<a
					href="/popup"
					class="rounded-lg bg-[#3B82F6] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#2563EB]"
				>
					{$t('nav.demoBtn')}
				</a>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
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

	<!-- Features Section -->
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

	<!-- Demo Section -->
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

	<!-- Quick Links -->
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

	<!-- FAQ Section -->
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

	<!-- Footer -->
	<footer class="py-8 text-center">
		<p class="text-[12px] text-gray-500">{$t('footer')}</p>
	</footer>
</div>
