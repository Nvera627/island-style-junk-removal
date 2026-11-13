# Island Style Junk Removal

Marketing site for Island Style Junk Removal (Charlotte, NC). Built with Astro and plain CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321/island-style-junk-removal/
npm run build    # outputs to dist/
```

## Edit it

- Phone, email, hours, form endpoint: `src/data/site.ts` (one place).
- Service list: `src/data/services.ts`.
- Pages: `src/pages/` (index, services, about, contact).
- Header, footer, flag stripe: `src/layouts/Layout.astro` and `src/components/`.
- Colors and styles: `src/styles/global.css` (see `:root` variables).
- Photos: `src/assets/images/`. Replace the placeholder SVGs and update the imports in the pages.

## Deploy (GitHub Pages)

1. Push to a public GitHub repo, branch `main`.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push.
4. In `astro.config.mjs`, set `site` to `https://<username>.github.io` and keep `base` as `/<repo-name>`.

### Custom domain later

Set `site` to the new domain and `base` to `'/'` in `astro.config.mjs`, add the domain in Settings > Pages, and add `public/CNAME` containing the domain.

## Quote form

The form posts to `formEndpoint` in `src/data/site.ts`. Create a free Formspree or Web3Forms account and replace the placeholder URL.
