<script>
	import Mark from '$lib/components/Mark.svelte';

	// Shell for the standalone pages — FAQ, privacy, terms. Same header, measure and
	// footer as the landing page so they read as part of the same site rather than
	// something bolted on.
	let { title, standfirst, updated, children } = $props();

	const REPO = 'https://github.com/Vedant-29/mica';
</script>

<div class="col-wide">
	<header class="top">
		<a href="/" aria-label="Mica"><span class="mark"><Mark /></span></a>
		<nav class="topnav">
			<a href="/">home</a>
			<a href="/faq">faq</a>
			<a href="/privacy">privacy</a>
			<a href="/terms">terms</a>
		</nav>
	</header>

	<main class="doc measure">
		<h1>{title}</h1>
		{#if standfirst}<p class="stand">{standfirst}</p>{/if}

		{@render children()}

		{#if updated}<p class="updated">Last updated {updated}</p>{/if}

		<p class="foot">
			<a href="/">← Mica</a> · Not affiliated with Apple · MIT licensed ·
			<a href={REPO} target="_blank" rel="noopener">source</a>
		</p>
	</main>
</div>
