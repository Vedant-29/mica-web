# mica-web

The landing page for Mica — https://mica.vedantagrw.com

SvelteKit 2 / Svelte 5, `adapter-cloudflare`, deployed to Cloudflare Pages. Every
route prerenders, so what ships is static files; the adapter is in place only so a
Worker route could be added later without restructuring.

## Layout

    src/routes/+page.svelte        The entire page. One route, no router to speak of.
    src/routes/+layout.js          prerender = true
    src/lib/components/Shot.svelte Screenshot in a frame, sized per image
    src/app.css                    All styling. Design tokens at the top.
    static/media/                  Web-sized video and screenshots (committed)
    assets/raw/                    Capture masters (gitignored — see below)

## Design

Monospace, editorial, two-tone. Tokens in `:root` with a
`prefers-color-scheme: dark` block; never hard-code a colour outside them.

`--col` (560px) is the reading measure and `--col-wide` (940px) is the page. Body
text is held to `--col` even inside the wide container, via `.measure`.

Sections pair prose with a screenshot in `.split`, alternating sides with `.rev`.
Below 820px the columns collapse and `.rev` stops reordering — otherwise a
reversed row puts its image above the text that introduces it.

**Screenshots are sized to the interface, not to the column.** Each `<Shot>` takes
a `max` in CSS pixels chosen so the controls land near life size — 330 for the menu
bar panel, 460 for the settings windows. Letting them fill the column magnified a
390pt panel to roughly triple size and looked amateurish. Shots also carry no
window chrome: the captures already contain a macOS window, and framing them again
produces two sets of traffic lights.

## Media

Raw captures live in `assets/raw/` and are **gitignored** — the source video is
95 MB. Everything in `static/media/` is derived from them:

    reveal.mp4     ffmpeg -i src -an -vf "scale=1600:-2,fps=30" \
                     -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p \
                     -movflags +faststart
    stills         ffmpeg -i src -vf "crop=W:H:X:Y"

That takes the video from 95 MB to ~284 KB. A VP9/webm encode was tried and came
out *larger* than the h264, so it isn't shipped.

Crop coordinates are measured, not eyeballed — eyeballing produced a panel with
59px of margin on one side and 44px on the other, which read as lopsided. Measure
the bounding box first (a few lines of PIL against the raw capture) and use an
even margin.

Screenshots must not contain personal data. The desktop-icon folder names in early
captures included things like `job-list` and `orion-interview-starter`; they are
absent from the shipped stills because Mica was hiding desktop icons. Check before
adding a new one.

## Deploying

Pushing to `main` publishes, via `.github/workflows/deploy.yml`. It needs two
repository secrets:

    CLOUDFLARE_API_TOKEN     Pages Write + DNS Write + Zone Read
    CLOUDFLARE_ACCOUNT_ID    <redacted-account-id>

To publish by hand instead — useful when checking a build before it is pushed:

    npm run deploy

Locally, wrangler's OAuth token covers Pages deploys. DNS changes need the scoped
API token at `~/.config/mica/cf-token`. **That file lives outside this repo and
must stay out of it.**

## The download button

It points at:

    https://github.com/Vedant-29/mica/releases/latest/download/Mica.dmg

GitHub resolves that to the newest non-prerelease asset, so **cutting a Mica
release is all that is needed to update the download** — this site is not
redeployed, and no version number is hard-coded here.

Do not commit a DMG to this repo. One used to live in `static/` and it meant the
download silently served whatever binary was last copied in by hand.

## House rules

- One page. If it needs a second, reconsider.
- Copy describes what the app actually does. When app behaviour changes, the copy
  is part of the change — "Hide Wallpaper" blurs the wallpaper, it does not
  replace it with a plain backdrop, and the copy said the wrong thing for a while.
- Verify rendering before claiming it works: build, serve `.svelte-kit/cloudflare`,
  and screenshot it headless. Do not assert a visual fix from the diff alone.
