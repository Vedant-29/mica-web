<script>
	import DocPage from '$lib/components/DocPage.svelte';

	const SITE = 'https://mica.vedantagrw.com';
	const REPO = 'https://github.com/Vedant-29/mica';
</script>

<svelte:head>
	<title>Privacy — Mica</title>
	<meta
		name="description"
		content="Mica collects nothing. It makes no network requests, has no analytics or telemetry, and keeps every setting on your own Mac."
	/>
	<link rel="canonical" href="{SITE}/privacy" />
</svelte:head>

<DocPage
	title="Privacy"
	standfirst="Mica collects nothing about you. This page explains what that means precisely, and what the few things around it — the website, the download — do involve."
	updated="13 August 2026"
>
	<h2>The short version</h2>
	<p>
		The app makes <strong>no network requests of any kind</strong>. There is no analytics, no
		telemetry, no crash reporting, no update check, no account and no licence server. It has
		nothing to send and nowhere to send it. You can confirm this rather than take our word for it —
		the <a href={REPO} target="_blank" rel="noopener">full source</a> is public.
	</p>

	<h2>What stays on your Mac</h2>
	<p>Mica stores a small amount of configuration locally, in the standard location for app preferences:</p>
	<ul>
		<li>Which features you have switched on, and the current mode</li>
		<li>Your keyboard shortcut</li>
		<li>The lists of apps you have chosen — to hide, to trigger on, and to exclude</li>
		<li>
			A short-lived snapshot of your system state while Mica is engaged, so a crash can be undone
			on the next launch. It is deleted once the state is restored.
		</li>
	</ul>
	<p>
		None of this leaves your machine. Deleting the app and its preferences removes all of it. Mica
		never reads the contents of your windows, files, screen or keystrokes — it hides things, it
		does not look at them.
	</p>

	<h2>This website</h2>
	<p>
		No analytics, no tracking scripts, no cookies, no fingerprinting. Nothing on this page is
		trying to work out who you are.
	</p>
	<p>
		It is served by Cloudflare Pages, which keeps standard server logs (IP address, timestamp,
		requested URL) for operational and security purposes as any web host does. Those logs are
		Cloudflare's and are governed by
		<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener"
			>their privacy policy</a
		>.
	</p>

	<h2>Downloads and source</h2>
	<p>
		The app and its source are hosted on GitHub. Downloading a release or browsing the repository
		is a request to GitHub, subject to
		<a
			href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
			target="_blank"
			rel="noopener">GitHub's privacy statement</a
		>. GitHub counts release downloads; that count is not connected to anything here.
	</p>

	<h2>Third parties</h2>
	<p>
		The app bundles one open-source dependency, for keyboard shortcut handling. It does no
		networking. There are no SDKs, no advertising, no data brokers, and nothing is shared with
		anyone — because nothing is collected in the first place.
	</p>

	<h2>Your rights</h2>
	<p>
		Rights over personal data — access, correction, deletion, portability — apply to data a
		service holds about you. We hold none, so there is nothing to request, export or erase. Your
		settings are yours, on your disk, and you can delete them yourself at any time.
	</p>

	<h2>Children</h2>
	<p>
		Mica is not directed at children and collects no information from anyone, of any age.
	</p>

	<h2>Changes</h2>
	<p>
		If this ever changes it will change here first, with the date above updated. Because the app is
		open source, any change in what it actually does is visible in the commit history too.
	</p>

	<h2>Contact</h2>
	<p>
		Questions about this policy:
		<a href="{REPO}/issues" target="_blank" rel="noopener">open an issue</a> on the repository.
	</p>
</DocPage>
