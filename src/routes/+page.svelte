<script>
	import Mark from '$lib/components/Mark.svelte';
	import Shot from '$lib/components/Shot.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const SITE = 'https://mica.vedantagrw.com';
	const REPO = 'https://github.com/Vedant-29/mica';
	// GitHub resolves this to the newest non-prerelease asset, so cutting a release
	// updates the download without redeploying this site or hard-coding a version.
	const DMG = `${REPO}/releases/latest/download/Mica.dmg`;
	const TITLE = 'Mica — hide your desktop before anyone else sees it';
	const DESC =
		'A free, open-source macOS app that clears your screen — windows, Dock, menu bar, wallpaper, desktop icons and notifications — in one keystroke, or by itself the moment you share.';
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESC} />
	<link rel="canonical" href={SITE} />
	<meta property="og:title" content="Mica" />
	<meta property="og:description" content={DESC} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE} />
	<meta property="og:image" content="{SITE}/media/reveal-poster.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="col-wide">
	<header class="top">
		<a href="#top" aria-label="Mica"><span class="mark"><Mark /></span></a>
		<nav class="topnav">
			<a href="#switches">switches</a>
			<a href="#windows">windows</a>
			<a href="#triggers">triggers</a>
			<a href="/faq">faq</a>
			<a href="#get">download</a>
		</nav>
	</header>
</div>

<main id="top">
	<div class="col-wide">
		<section class="hero measure">
			<h1>Hide your desktop<br />before anyone else sees it.</h1>
			<p>
				Mica clears the screen in one keystroke — windows, Dock, menu bar icons, wallpaper,
				desktop clutter and notifications. Or it notices the share starting and does it for you.
			</p>
			<p class="ink">When you're done, everything comes back exactly as it was.</p>

			<div class="btns">
				<a class="btn solid" href="#get"><Icon name="download" /> Download for macOS</a>
				<a class="btn" href={REPO} target="_blank" rel="noopener">
					<Icon name="github" /> View on GitHub
				</a>
			</div>
			<p class="req">Free &amp; open source · macOS 15+ · Apple Silicon &amp; Intel</p>
		</section>

		<figure class="media">
			<div class="bar"><i></i><i></i><i></i></div>
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				src="/media/reveal.mp4"
				poster="/media/reveal-poster.jpg"
				width="1600"
				height="900"
				autoplay
				muted
				loop
				playsinline
				preload="metadata"
			></video>
			<figcaption>One switch at a time — Dock, menu bar, wallpaper, desktop icons.</figcaption>
		</figure>

		<div class="rule"></div>

		<section class="sec" id="switches">
			<div class="split">
				<div class="txt">
					<div class="num">01</div>
					<h2>Six switches, one keystroke</h2>
					<p>
						Everything lives in one menu bar panel. <span class="hl">On</span> hides now.
						<span class="hl">Auto</span> hides only while your screen is being watched.
						<span class="hl">Off</span> stands down. <span class="hl">⌥⌘S</span> flips it from
						anywhere.
					</p>
					<p>Nothing is closed and nothing is lost — an app you'd already hidden stays hidden.</p>

					<ul class="flist">
						<li>
							<span class="k">Do Not Disturb</span><span class="v">Silences notifications.</span>
						</li>
						<li>
							<span class="k">Hide Active Windows</span><span class="v"
								>All, all but the front, or a list you pick.</span
							>
						</li>
						<li><span class="k">Hide Dock</span><span class="v">Slides it out of sight.</span></li>
						<li>
							<span class="k">Hide Menu Bar Icons</span><span class="v"
								>Everything left of Mica's marker.</span
							>
						</li>
						<li>
							<span class="k">Hide Wallpaper</span><span class="v"
								>Blurs it past recognition, keeping the colour.</span
							>
						</li>
						<li>
							<span class="k">Hide Desktop Icons</span><span class="v"
								>Clears the desktop; the wallpaper stays.</span
							>
						</li>
					</ul>
				</div>
				<Shot
					src="/media/panel.png"
					width={625}
					height={761}
					max={330}
					alt="Mica's menu bar panel, set to On, with all six switches enabled."
					caption="The whole app is one panel."
				/>
			</div>
		</section>

		<section class="sec" id="windows">
			<div class="split rev">
				<div class="txt">
					<div class="num">02</div>
					<h2>Everything, or only what you choose</h2>
					<p>
						Hiding every window is usually too much — you still need the thing you're presenting.
						So choose the scope: <span class="hl">all windows</span>,
						<span class="hl">all except the frontmost</span>, or name the apps yourself and hide
						<span class="hl">only those</span> — or everything <span class="hl">but</span> those.
					</p>
					<p>The messages keep arriving. Nobody watching sees them.</p>
				</div>
				<Shot
					src="/media/windows.png"
					width={1280}
					height={1180}
					max={460}
					alt="Mica's Windows settings: four hiding scopes, with Claude, Messages and WhatsApp picked."
					caption="Settings › Windows — the apps you'd rather not explain."
				/>
			</div>
		</section>

		<section class="sec" id="triggers">
			<div class="split">
				<div class="txt">
					<div class="num">03</div>
					<h2>It can turn itself on</h2>
					<p>
						In <span class="hl">Auto</span>, Mica watches for the moments that mean someone else is
						about to see your screen — a share or recording starting in Zoom, Meet, Teams,
						QuickTime, OBS or <span class="hl">⌘⇧5</span>, and a display being mirrored or
						extended.
					</p>
					<p>
						You can add apps of your own, each set to turn Mica on or just remind you. And
						exclusions — apps that hold it off no matter what else is happening.
					</p>
				</div>
				<Shot
					src="/media/triggers.png"
					width={1280}
					height={1180}
					max={460}
					alt="Mica's Triggers settings: trigger apps that switch it on, and excluded apps that hold it off."
					caption="Settings › Triggers — turn on for these, never for those."
				/>
			</div>
		</section>

		<div class="rule"></div>

		<section class="sec measure" id="get">
			<div class="num">04</div>
			<h2>Get Mica</h2>
			<p>Free, open source, and yours to keep. No account, no subscription, no tracking.</p>
			<div class="btns">
				<a class="btn solid" href={DMG}><Icon name="download" /> Download .dmg</a>
				<a class="btn" href={REPO} target="_blank" rel="noopener">
					<Icon name="github" /> View on GitHub
				</a>
			</div>
			<p class="req">first launch: right-click → Open</p>
		</section>

		<p class="foot">
			<a href="/faq">FAQ</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> ·
			<a class="ghlink" href={REPO} target="_blank" rel="noopener"
				><Icon name="github" size={12} /> GitHub</a
			>
			<br />
			Not affiliated with Apple · MIT licensed
		</p>
	</div>
</main>
