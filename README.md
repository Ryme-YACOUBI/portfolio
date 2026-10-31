# Ryme Yacoubi — Portfolio

Personal portfolio of Ryme Yacoubi, IT engineering student. It presents my journey, projects, skills and experiences in a bilingual (English / French) site with a light and a dark theme.

**Live site:** https://YOUR-DOMAIN-HERE *(to be added after deployment)*

---

## Features

- **Bilingual interface (EN / FR)** — every text is translated from a single dictionary (`translations.js`). The chosen language is saved in `localStorage` (key `lang`) and carried over to every page.
- **Light / dark theme** — saved in `localStorage` (key `theme`) and shared by all pages, with a small inline script in each `<head>` to avoid a flash of the wrong theme on load.
- **Interactive galleries (React + GSAP)** — the *About me* and *My Journey* sections use an accordion gallery: hovering a card opens it.
- **Project cards with modal** — each project shows its title, and a *More details* button opens a native `<dialog>` with the full description (Esc, close button and click outside all close it).
- **Skills page** — technical skills with progress bars, soft skills and languages.
- **Contact form** — sends messages with EmailJS, with translated labels and placeholders.
- **Consistent hover effect** — all cards share one light hover style defined by a single CSS variable (`--hover-shadow`).
- **Responsive and accessible** — skip link, keyboard navigation, visible focus styles, `prefers-reduced-motion` support, semantic landmarks.

## Tech stack

| Area | Tools |
|---|---|
| Structure and style | HTML5, CSS3 (custom properties, Grid, Flexbox) |
| Logic | JavaScript (vanilla) |
| Interactive components | React, GSAP |
| Build | Vite |
| Contact form | EmailJS |

## Project structure

```
.
├── index.html              Home page (hero, about, journey, projects, skills, experiences, contact)
├── index.css               Global styles, themes, cards, project modal
├── translations.js         EN / FR dictionary + language switch
├── themes.js               Light / dark theme switch (saved in localStorage)
├── index.js                Home page scripts
├── project_modal.js        Opens and closes the project modals
├── contact_me.html         Contact page
├── contact.css             Contact form styles
├── contact.js              Contact form logic (EmailJS)
├── skills/
│   ├── skills.html         Detailed skills page
│   └── skills.css
├── src/
│   ├── main.jsx                      About me gallery
│   ├── connexion_journey.jsx         My Journey gallery (language aware)
│   ├── AccordionGallery.jsx / .css   Accordion gallery component
│   ├── data_journey.js               Journey content (English)
│   └── data_journey_fr.js            Journey content (French)
└── public/
    └── images/             Journey photos
```

## Getting started

```bash
# 1. Install the dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Configuration

### Contact form (EmailJS)

The form uses [EmailJS](https://www.emailjs.com/). Set your service ID, template ID and public key in `contact.js`. The public key is meant to be visible in the browser, so protect the form in the EmailJS dashboard by restricting the allowed domains to the production domain.

### Adding a translation

1. Add the key to **both** the `en` and `fr` objects in `translations.js`.
2. Put `data-i18n="yourKey"` on the HTML element (or `data-i18n-attr="placeholder:yourKey"` for an attribute).

### Adding a Journey card

Add an object `{ title, subtitle, text, image }` to both `data_journey.js` and `data_journey_fr.js`, and put the image in `public/images/`.

---

## Remaining work

### SEO left

Checklist based on [HTML for SEO: The Tags and Structure That Matter](https://getcited.marketing/blog/html-css).

**Head tags**
- [ ] Add a `<link rel="canonical">` with the absolute URL on every page
- [ ] Write a more descriptive title for the home page (for example *Ryme Yacoubi — IT Engineering Student Portfolio*)
- [ ] Add a `<meta name="description">` to `contact_me.html`
- [ ] Add Open Graph and Twitter card tags (title, description, URL, 1200×630 image) so links look good when shared
- [ ] Add a favicon

**Structure and content**
- [ ] Experiences section: company names (Orange Business Maroc, Farasha Systems) are `<h2>`; make them `<h3>` so the outline stays *h1 → h2 → h3*
- [ ] The nav links to `#home` but no element has `id="home"`: add it (for example on the hero section)
- [ ] Keep one `<h1>` per page (currently respected)
- [ ] The About me and Journey texts are rendered by JavaScript. Google can read them, but most AI crawlers do not run JavaScript: consider a short plain-HTML summary of each
- [ ] Check with *View Source* that key text appears in the raw HTML

**Images**
- [ ] Convert `ryme.png` to WebP and add `fetchpriority="high"` (it is the main image of the page)
- [ ] Keep `width` and `height` on every `<img>` to avoid layout shift
- [ ] Gallery photos are CSS backgrounds, so they are not indexed as images: fine for decoration

**Structured data and crawling**
- [ ] Add JSON-LD (`Person` schema with name, job title, school, links) in `index.html`
- [ ] Create `robots.txt` (do not block CSS or JS)
- [ ] Create `sitemap.xml` (home, skills, contact) and submit it in Google Search Console
- [ ] Language switch is JavaScript only (a single URL), so only the English text is indexed. Decide: keep as is, or create separate `/fr/` pages with `hreflang`

**Checks**
- [ ] Run Lighthouse (SEO, performance, accessibility) and aim for green scores
- [ ] Check Core Web Vitals in PageSpeed Insights (CLS ≤ 0.1)
- [ ] Validate the structured data with Google's Rich Results Test

### Deployment left

- [ ] Choose a host (GitHub Pages, Netlify, Vercel or Cloudflare Pages)
- [ ] **Multi-page build:** the project has several HTML pages. Declare them all in `vite.config.js` (`build.rollupOptions.input`: `index.html`, `skills/skills.html`, `contact_me.html`, and `pages/projects.html` if kept), otherwise only `index.html` is built
- [ ] **Plain scripts:** `translations.js`, `index.js`, `project_modal.js` and `contact.js` are loaded without `type="module"`, so Vite does not copy them into `dist/`. Move them (and the CV PDFs) into `public/`
- [ ] Hero button *View my projects* points to `pages/projects.html`; either keep that page or point the button to `#projects`
- [ ] Replace the placeholder links: `URL_DU_REPO_NEARSHORE`, `URL_DU_REPO_LIFEMAP`, `URL_DU_REPO_C`, and the generic GitHub and LinkedIn links in the contact block
- [ ] Set `base` in `vite.config.js` if the site is served from a sub-path (GitHub Pages project site)
- [ ] Restrict the EmailJS domains to the production domain and send a real test message
- [ ] Add a custom domain and check that HTTPS is active
- [ ] Add a `404.html` page
- [ ] Test the production build on phone, tablet and desktop, in both languages and both themes
- [ ] Remove unused code: `CircularCarousel.jsx / .css`, `DepthCarousel`, `connexion_projets.jsx`
- [ ] Put the live URL at the top of this README and in the GitHub repository description

---

## Credits

Photos and fonts: credits are listed on the About page.

## Author

**Ryme Yacoubi** — IT engineering student