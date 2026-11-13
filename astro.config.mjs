import { defineConfig } from 'astro/config';

// Change these two values when the custom domain is connected:
//   site: 'https://yourdomain.com',  base: '/'
// While on GitHub Pages project hosting, base must match the repo name.
export default defineConfig({
  site: 'https://nvera627.github.io',
  base: '/island-style-junk-removal',
  output: 'static',
});
