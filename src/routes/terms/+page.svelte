<script>
	import DocPage from '$lib/components/DocPage.svelte';

	const SITE = 'https://mica.vedantagrw.com';
	const REPO = 'https://github.com/Vedant-29/mica';
</script>

<svelte:head>
	<title>Terms — Mica</title>
	<meta
		name="description"
		content="Mica is free and MIT licensed, provided as-is with no warranty. These are the terms for using the app and this site."
	/>
	<link rel="canonical" href="{SITE}/terms" />
</svelte:head>

<DocPage
	title="Terms"
	standfirst="Mica is free software, given away under the MIT licence. There is not much to agree to, and this page is the whole of it."
	updated="13 August 2026"
>
	<h2>Licence</h2>
	<p>
		Mica is released under the <a href="{REPO}/blob/main/LICENSE" target="_blank" rel="noopener"
			>MIT licence</a
		>. You may use it for anything, including commercially; copy it; modify it; and redistribute it,
		as long as the copyright notice and licence text travel with it. The licence is the governing
		document — if anything on this page appears to contradict it, the licence wins.
	</p>
	<p>
		There is nothing to buy. No subscription, no trial, no licence key, no per-seat limit, and no
		restriction on how many machines you install it on.
	</p>

	<h2>No warranty</h2>
	<p>
		The software is provided <strong>as is, without warranty of any kind</strong>. It is not
		guaranteed to be error-free, to hide everything in every situation, or to be fit for any
		particular purpose.
	</p>
	<p>
		This matters more than usual here, so it is worth stating plainly: <strong
			>do not rely on Mica alone to protect genuinely sensitive material</strong
		>. It is built carefully and it restores your setup after a crash, but screen capture on macOS
		has cases it cannot see — some Apple-internal capture streams can exempt themselves from the
		signal Mica reads. Treat it as a very good habit, not as a guarantee. If something must not
		appear on a shared screen, close it.
	</p>

	<h2>Limitation of liability</h2>
	<p>
		To the fullest extent the law allows, the author is not liable for any damages arising from the
		use or inability to use this software — including anything disclosed on a shared screen that
		you would rather had not been. You use it at your own risk.
	</p>

	<h2>Acceptable use</h2>
	<p>
		Mica hides your own desktop on your own machine. Do not use it to conceal activity you are
		obliged to disclose — in a supervised exam, a monitored work environment, or anywhere you have
		agreed to be observed. Whether such use is permitted is between you and whoever is watching;
		that responsibility is yours, not the software's.
	</p>

	<h2>Not affiliated with Apple</h2>
	<p>
		Mica is an independent project. It is not affiliated with, endorsed by, or sponsored by Apple
		Inc. macOS, Mac and Apple are trademarks of Apple Inc. Any other product names mentioned belong
		to their respective owners and appear only to describe compatibility.
	</p>

	<h2>Third-party services</h2>
	<p>
		Downloads and source are hosted on GitHub; this site is served by Cloudflare. Their terms apply
		to those services. Neither is operated by this project.
	</p>

	<h2>Privacy</h2>
	<p>
		Mica collects nothing — no analytics, no telemetry, no network requests at all. The
		<a href="/privacy">privacy page</a> sets out the detail.
	</p>

	<h2>Changes</h2>
	<p>
		These terms may be updated; the date above will change with them. Continuing to use the app
		after a change means accepting the revised version. Any release you already have remains
		licensed under the MIT terms it shipped with.
	</p>

	<h2>Contact</h2>
	<p>
		Questions about these terms:
		<a href="{REPO}/issues" target="_blank" rel="noopener">open an issue</a> on the repository.
	</p>
</DocPage>
