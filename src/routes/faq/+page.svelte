<script>
	import DocPage from '$lib/components/DocPage.svelte';

	const SITE = 'https://mica.vedantagrw.com';
	const REPO = 'https://github.com/Vedant-29/mica';

	// Answers are drawn from what the app actually does — see the repo README for the
	// long form. If app behaviour changes, these change with it.
	const faqs = [
		{
			q: 'What does Mica actually hide?',
			a: 'Six things, each switchable on its own: your open windows, the Dock, menu bar icons, the wallpaper, desktop icons and widgets, and notifications (via Do Not Disturb). Turn on only the ones you want.'
		},
		{
			q: 'Does it work with Zoom, Meet, Teams, QuickTime and OBS?',
			a: 'Yes. Rather than watching for particular apps, Mica reads the window server’s own count of active capture streams — so one signal covers every sharing and recording tool alike, including ⌘⇧5 and Screen Sharing. It also notices a display being mirrored or extended.'
		},
		{
			q: 'Does my setup come back afterwards?',
			a: 'Yes, exactly as it was. Mica records what was visible before it hid anything and restores only that — an app you had already hidden yourself stays hidden. Nothing is closed and no windows are moved.'
		},
		{
			q: 'What if it crashes while everything is hidden?',
			a: 'Before touching anything, Mica writes a snapshot of your prior state to disk and flushes it. If it is killed mid-session, the next launch finds that snapshot, puts everything back, and deletes it. A crash cannot leave your Dock hidden with no way to work out why.'
		},
		{
			q: 'Is it free?',
			a: 'Yes. Free, open source, MIT licensed. No account, no subscription, no trial, no paid tier. The full source is on GitHub.'
		},
		{
			q: 'Does Mica collect any data?',
			a: 'No. It makes no network requests at all — there is no analytics, no telemetry, no crash reporting and no update check. Your settings stay on your Mac. See the privacy page.'
		},
		{
			q: 'What permissions does it need?',
			a: 'None of the alarming ones. No Accessibility, no Screen Recording, no Full Disk Access. Mica uses the underlying system APIs directly instead of automating other apps, which is what usually triggers those prompts.'
		},
		{
			q: 'Why does macOS warn me the first time I open it?',
			a: 'Because the app is signed but not notarized — notarization requires a paid Apple Developer account. Right-click the app and choose Open, and macOS will remember. You can also run xattr -cr /Applications/Mica.app, or build it yourself from source.'
		},
		{
			q: 'What version of macOS do I need?',
			a: 'macOS 15 or later, on Apple Silicon or Intel. It is developed and tested on macOS 26; earlier versions should work but are unverified, and several of the APIs involved are version-sensitive.'
		},
		{
			q: 'Can I hide only some apps?',
			a: 'Yes. Hide Active Windows takes a scope: all windows, all except the frontmost, only apps you name, or everything except apps you name. The usual setup is to name the few apps you would rather not explain and leave everything else alone.'
		},
		{
			q: 'Why does Do Not Disturb need setting up?',
			a: 'macOS has no API that lets a third-party app turn Focus on. Mica runs two Shortcuts you create once — about thirty seconds, and Settings walks you through it. Skip it and the other five features still work with no setup at all.'
		},
		{
			q: 'How does it know which menu bar icons to hide?',
			a: 'Mica puts a small ‹ marker in your menu bar. Everything to the left of it hides; everything to the right stays. ⌘-drag the marker to set where the cut-off falls. It will never hide its own icon — if that would happen, it backs out and tells you.'
		},
		{
			q: 'Mica’s icon has not appeared in my menu bar.',
			a: 'macOS 26 can hide a new app’s menu bar icon by default. Enable it under System Settings → Control Center → Menu Bar, in the “Allow in the Menu Bar” list.'
		},
		{
			q: 'Can I use it on more than one display?',
			a: 'Yes. The wallpaper cover is created per display and rebuilt when you plug or unplug one, and menu bar hiding is sized against your widest screen so it covers every bar.'
		},
		{
			q: 'How do I turn it on and off quickly?',
			a: '⌥⌘S from anywhere. Or pick a mode in the panel: On hides now, Auto hides only while your screen is being watched, Off stands down.'
		}
	];
</script>

<svelte:head>
	<title>FAQ — Mica</title>
	<meta
		name="description"
		content="Common questions about Mica: what it hides, which apps it works with, what permissions it needs, and what it does with your data."
	/>
	<link rel="canonical" href="{SITE}/faq" />
</svelte:head>

<DocPage
	title="Questions"
	standfirst="What Mica does, what it needs, and what it does not do."
>
	{#each faqs as { q, a }}
		<div class="qa">
			<h3>{q}</h3>
			<p>{a}</p>
		</div>
	{/each}

	<h2>Something else</h2>
	<p>
		Anything not covered here is probably in the
		<a href="{REPO}#readme" target="_blank" rel="noopener">README</a>, which goes into how each
		feature is implemented and what its limitations are. If that does not answer it,
		<a href="{REPO}/issues" target="_blank" rel="noopener">open an issue</a>.
	</p>
</DocPage>
