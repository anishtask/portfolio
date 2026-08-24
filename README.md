# Anish Bala — Portfolio Site

A one-page freelance/agency portfolio built with **React + Vite + Tailwind CSS**.

## Stack
- React 19 (function components + hooks)
- Vite (dev server + build)
- Tailwind CSS (utility styling, custom brand tokens in `tailwind.config.js`)
- Plain `IntersectionObserver` for scroll-reveal animation (`src/hooks/useReveal.js`) — no animation library needed

## Project structure
```
src/
  components/     Navbar, Hero, Tools, Services, Projects, ProjectThumb,
                   Process, About, Benefits, SocialProof, CTA, Footer
  data/
    content.js    All copy: services, projects, process steps, benefits.
                   Edit text here instead of digging through JSX.
  hooks/
    useReveal.js   Scroll fade-in behaviour, reused across sections
  App.jsx          Composes all sections in order
  index.css        Tailwind directives + small global rules
public/
  favicon.svg      Simple monogram favicon
.github/workflows/deploy.yml   Auto-deploys to GitHub Pages on push to main
```

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## Deploy to GitHub Pages (automatic)

This repo includes a GitHub Actions workflow that builds and deploys on every
push to `main`.

1. Push this project to a new GitHub repo.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab).
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

`vite.config.js` uses a relative `base: './'`, so the build works whether it's
served from the domain root or a GitHub Pages project subpath — no need to
hardcode the repo name anywhere.

## Content & asset notes

Per the brief, **no client testimonials, results, or numbers were invented.**
The "What Clients Appreciate" section (`SocialProof.jsx`) currently shows a
truthful working-style summary instead of fabricated quotes. When you have
real testimonials, replace the `socialProofHighlights` array in
`src/data/content.js` with actual client name / quote / company data, or ask
to have the section restyled into a quote-card layout.

**Photo:** `About.jsx` currently renders a placeholder avatar. To use your
real photo, add the image file to `public/` (e.g. `public/anish.jpg`) and
replace the placeholder `<svg>` block with:
```jsx
<img src="./anish.jpg" alt="Anish Bala" className="w-full h-full object-cover" />
```

**Project screenshots:** `ProjectThumb.jsx` currently renders stylized
CSS/SVG mockups per project (no real screenshots were available to pull in).
To swap in real screenshots, add image files to `public/projects/` and
replace the relevant `<div>` block in `ProjectThumb.jsx` with an `<img>` tag.

**Design tokens:** brand colors, fonts, shadows and radii are centralized in
`tailwind.config.js` under `theme.extend`, matching the palette from the
brief (`#050B18` navy, `#1683FF` blue, etc.) — change values there to retheme
the whole site at once.
