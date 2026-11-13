# Island Style Junk Removal: Website

Marketing website for Island Style Junk Removal, a junk removal startup in the Charlotte, NC area owned by Duane. Nic is building it for him and will list it on his resume as a live project.

## Goals
- Clean, professional, fast. It must look good to a recruiter clicking the link from a resume.
- Get visitors to call, text, or send a quote request.
- Easy for Nic to update later with Claude.

## Stack and hosting
- Astro (static output) with plain CSS. No UI framework unless needed.
- Hosted free on GitHub Pages from a public repo, deployed with the official Astro GitHub Actions workflow.
- Custom domain will be added later (Nic will buy it). Keep `site` and `base` in astro.config easy to change.
- Quote form posts to a free form service (Formspree or Web3Forms) that emails Duane. Use a placeholder endpoint until the account exists.

## Pages
1. Home: hero, haul strip, services preview, how it works, about teaser, quote CTA
2. Services: full list of what we haul (furniture, appliances, mattresses, electronics, garage/attic/basement/storage cleanouts, move-outs, light debris). Note that yard waste is case by case.
3. About: Duane's story
4. Contact: quote form plus call, text, and email

Shared header, footer, and flag stripe come from one layout component.

## Design (chosen direction: "C: Clean Modern + Pop")
Reference file: `reference/design-modern-pop.html`. Match its look. It uses a canvas markup format, so treat it as a visual spec and rebuild it as clean Astro components, not a copy-paste.
- Colors: deep green `#0F3D2E`, green `#17663F`, gold `#F4B400`, ink `#16181A`, off-white background `#FAFAF7`, white cards
- Fonts: Space Grotesk (headings, 700) and Inter (body), from Google Fonts
- Signature details: green/gold/black flag stripe at top and bottom, rounded deep green hero panel with a tilted gold "Keep it easy." label, tilted gold haul strip, gold buttons with a dark green drop shadow and hover lift, service cards with alternating green/gold top borders, full gold "How it works" panel, gold offset block behind the About photo
- Subtle nod to Jamaica (Duane is from Jamaica). Do not overdo it.
- Fully responsive. Must look right on a phone.

## Content rules
- Name: "Island Style Junk Removal"
- Tagline idea: "If we can move it, we'll haul it."
- Pricing: "Contact for a free quote". No prices on the site.
- Hours: "Call anytime"
- Use placeholders `[PHONE NUMBER]` and `[EMAIL]` until Duane approves the site. Keep them in one config file so they change in one place.
- Do NOT claim licensed, insured, reviews, star ratings, years in business, or jobs completed. The business is new and none of that exists yet.
- Stock photos for now, swapped for real photos later. Keep images in one folder with clear names.
- Writing style: no em dashes, no filler, short direct sentences.

## Quality bar
- Lighthouse 90+ on performance, accessibility, best practices, SEO
- Real semantic HTML, labeled form fields, alt text, good color contrast
- Page titles, meta descriptions, Open Graph tags, favicon
- LocalBusiness schema markup for Charlotte, NC
- Readable code with a short README explaining how to run, edit, and deploy
