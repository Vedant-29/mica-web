# Mica — website

The landing page for [Mica](https://github.com/Vedant-29/mica), the macOS screen-privacy app.

Single self-contained `index.html` — no build step, no dependencies. Open it in a browser,
or serve the folder:

```sh
python3 -m http.server 8000     # then open http://localhost:8000
```

## Adding videos

Every product visual is a **slot** with a `data-video` path. Drop a matching file into
`videos/` and it appears automatically (autoplay, muted, looped); until then a colorful
placeholder shows the expected filename.

| Slot | File | Suggested clip |
|---|---|---|
| Hero | `videos/hero.mp4` | Full engage: share a screen, watch everything hide, then reveal |
| Card 1 | `videos/screen-share.mp4` | A Zoom/Meet share auto-triggering Mica |
| Card 2 | `videos/windows.mp4` | Windows hiding and coming back |
| Card 3 | `videos/desktop.mp4` | Desktop icons clearing, wallpaper staying |
| Card 4 | `videos/dnd.mp4` | The Do Not Disturb moon appearing |

Keep them short (5–10s), muted, and ideally `.mp4` (H.264) for the widest support. Screen
recordings from ⌘⇧5 work well.

## The download

Put the built DMG at `downloads/Mica.dmg` (gitignored by default — host it via a release
instead of committing a binary). The Download button points there.

## Deploying

It's static, so anything works — GitHub Pages, Netlify, Vercel, Cloudflare Pages. For
GitHub Pages: push, then enable Pages on the `main` branch root.

## Design

Clean and minimal, with color used deliberately (amber / violet / green / sky accents per
feature) rather than a single flat theme. Light and dark both handled. No frameworks — one
HTML file, inline CSS, a few lines of JS to inline the logo and swap in videos.
