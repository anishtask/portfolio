# Anish Bala — Portfolio Site

A single-page portfolio site. Plain HTML/CSS/JS — no build step, no framework,
so it runs directly on GitHub Pages.

## File map

Everything sits flat at the repo root — no subfolders. GitHub's web upload
can silently drop folder structure when you drag in loose files, so this
avoids that trap entirely.

```
index.html   → page structure/copy (12 sections)
style.css    → all styling
config.js    → ← EDIT THIS FILE for day-to-day updates (videos, projects, contact)
main.js      → page behavior (reads config.js, you shouldn't need to touch this)
```

Any image/video files you add later should also go at the root, next to
these files — not inside a new folder — unless you create that folder using
GitHub's "path as filename" trick (see below).

## Updating your video / projects / contact info

Everything that changes often lives in **`config.js`**, with comments
explaining each option. You don't need to touch the HTML or CSS.

- **Hero video**: swap the `heroMedia` object once you have a demo reel.
  Until then it shows a clean animated placeholder instead of a broken video.
- **Project "live view" videos**: each entry in the `projects` array has its
  own `media` object — same rules as the hero.
- **Contact email / phone**: set `contact.email` / `contact.phone` — leave
  blank to hide.
- **Contact form**: leave `formEndpoint` blank and the form opens the
  visitor's email app, pre-filled, with zero backend needed. Or create a
  free endpoint at [Formspree](https://formspree.io) and paste the URL in
  to receive submissions directly.

**Adding a video/image file:** on GitHub, click **Add file → Upload files**
and drop the `.mp4`/`.jpg` in — it'll land at the repo root. Then point
`src` at just the filename, e.g. `"hero-reel.mp4"`. YouTube/Vimeo links
work too — see the comments in `config.js`.

**If you want a tidy `assets/` folder instead:** GitHub's drag-and-drop
upload won't preserve folders reliably, but you can force one to exist by
using **Add file → Create new file** and typing the full path as the
filename, e.g. `assets/hero-reel.mp4` — GitHub creates the folder
automatically. If you go this route, remember to update the matching
`src` in `config.js` to include that path.

## Running it locally

No build step needed — just open `index.html` in a browser, or serve the
folder locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push these files to a GitHub repository (root level, no subfolders).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the `main` branch and `/ (root)` folder, then save.
4. GitHub gives you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two — it redeploys automatically on every commit.

If you'd rather use a custom domain, add it under the same Pages settings
and follow GitHub's DNS instructions.
