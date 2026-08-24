import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built assets resolve correctly whether the site
  // is served from the domain root or from a GitHub Pages project path
  // like https://<user>.github.io/<repo>/.
  base: './',
  plugins: [react()],
})
