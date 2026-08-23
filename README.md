# Anish Bala — Portfolio Site

A static one-page portfolio site (pure HTML/CSS/JS, no build step needed).

## Files
- `index.html` — page structure/content
- `styles.css` — all styling
- `script.js` — mobile nav toggle, testimonial rotation, sticky header shadow

## Host it on GitHub Pages

1. Create a new GitHub repo (e.g. `anish-portfolio`).
2. Upload `index.html`, `styles.css`, and `script.js` to the root of the repo
   (drag-and-drop on the GitHub web UI works fine, or use git):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. After a minute, your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Customizing
- Swap in your own photo: replace the `.portrait-frame` SVG placeholder in
  `index.html` with an `<img>` tag pointing at an image file you add to the repo.
- Update project thumbnails the same way — the current cards use CSS/SVG
  mockups so there are no external image dependencies.
- Edit copy, links, and the email address (`anish.task@gmail.com`) directly
  in `index.html`.
- Colors and spacing are controlled by CSS variables at the top of
  `styles.css` (`:root { ... }`) if you want to retheme quickly.
