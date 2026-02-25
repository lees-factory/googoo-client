<script lang="ts">
	import { onMount } from 'svelte';
	import { initLocale } from '$lib/i18n';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		initLocale();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
