# Mica — website

The landing page for [Mica](https://github.com/Vedant-29/mica), the macOS screen-privacy
app.

**Live at [mica.vedantagrw.com](https://mica.vedantagrw.com)**

SvelteKit 2 / Svelte 5, deployed to Cloudflare Pages. Every route prerenders, so what ships
is plain static files — nothing runs at request time.

## Running it

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # output in .svelte-kit/cloudflare
npm run preview
```

## Layout

```
src/routes/+page.svelte          The whole page — one route
src/lib/components/Shot.svelte   A screenshot, sized per image
src/app.css                      All styling; design tokens at the top
static/media/                    Web-sized video and screenshots
assets/raw/                      Capture masters (gitignored — large)
```

## Media

`static/media/` is committed and web-sized. The originals it came from are not — the source
screen recording is 95 MB, so `assets/raw/` is gitignored and kept locally.

The video is re-encoded down to roughly 284 KB:

```sh
ffmpeg -i raw.mp4 -an -vf "scale=1600:-2,fps=30" \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart \
  static/media/reveal.mp4
```

Audio is dropped, frame rate halved, and `+faststart` moves the index to the front so it
begins playing before the file finishes downloading. A VP9/WebM encode was tried and came
out *larger* than the H.264, so it isn't shipped.

Screenshots are cropped from full-screen captures and displayed at roughly the size the
interface really is — a menu bar panel stretched across a wide column reads as an
enlargement rather than a screenshot.

## Deploying

Pushing to `main` builds and publishes automatically. There's no manual step.

To publish by hand — useful for checking a build before pushing:

```sh
npm run deploy
```

This needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets. They
are already configured; values are not in this repo.

## The download button

It points at a URL that GitHub resolves to the newest published release:

```
https://github.com/Vedant-29/mica/releases/latest/download/Mica.dmg
```

**Cutting a release in the app repo is all that is needed to update the download here.**
This site isn't rebuilt or redeployed, and no version number is written into it.

Don't commit a `.dmg` to this repo. One used to live in `static/`, which meant the download
served whatever binary had last been copied in by hand, traceable to no particular build.

## License

MIT — see [LICENSE](../mica/LICENSE) in the app repo.
