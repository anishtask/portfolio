# Anish Bala — Portfolio Site

A single-page portfolio site. Plain HTML/CSS/JS — no build step, no framework,
so it runs directly on GitHub Pages.

## File map

```
index.html        → page structure/copy (12 sections, matches your content doc)
css/style.css      → all styling
js/config.js       → ← EDIT THIS FILE for day-to-day updates (videos, projects, contact)
js/main.js         → page behavior (reads config.js, you shouldn't need to touch this)
assets/            → put your images/videos here
```

## Updating your video / projects / contact info

Everything that changes often lives in **`js/config.js`**, with comments
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

Adding a video file: drop the `.mp4` in `assets/videos/`, then point
`src` at it, e.g. `"assets/videos/hero-reel.mp4"`. YouTube/Vimeo links work
too — see the comments in `config.js`.

## Running it locally

No build step needed — just open `index.html` in a browser, or serve the
folder locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the `main` branch and `/ (root)` folder, then save.
4. GitHub will give you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two.

If you'd rather use a custom domain, add it under the same Pages settings
and follow GitHub's DNS instructions.
