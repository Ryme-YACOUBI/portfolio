# Ryme Yacoubi — Portfolio

Personal portfolio of Ryme Yacoubi, IT engineering student. It presents my journey, projects, skills and experiences in a bilingual (English / French) website with light and dark themes.

**Live website:** [https://portfolio-five-beta-q4ml5sfvny.vercel.app/](https://portfolio-five-beta-q4ml5sfvny.vercel.app/)

---

## Features

- **Bilingual interface (EN / FR)** — Every text is translated using a centralized dictionary (`translations.js`). The selected language is saved in `localStorage` and shared across pages.
- **Light / dark theme** — Theme preferences are saved in `localStorage` and maintained across pages.
- **Interactive galleries (React + GSAP)** — The About Me and My Journey sections feature interactive accordion galleries.
- **Project cards with modal windows** — Each project displays its title and a More Details button opening a native HTML dialog with its full description.
- **Dedicated Skills page** — Presents technical skills, soft skills and languages.
- **Contact form** — Allows visitors to send messages using EmailJS, with translated labels and placeholders.
- **Consistent visual design** — Shared hover effects, reusable styling and a coherent visual identity.
- **Responsive and accessible** — Includes keyboard navigation, visible focus styles, semantic HTML landmarks, skip links and reduced-motion support.

## Tech Stack

| Area | Technologies |
|---|---|
| Structure and styling | HTML5, CSS3, CSS Grid, Flexbox |
| Programming | JavaScript (Vanilla) |
| Interactive components | React, GSAP |
| Build tool | Vite |
| Contact form | EmailJS |
| Deployment | Vercel |

## Project Structure

```text
.
├── index.html              Home page
├── index.css               Global styles and themes
├── translations.js         English / French translations
├── themes.js               Light / dark theme management
├── index.js                Home page scripts
├── project_modal.js        Project modal management
├── contact_me.html         Contact page
├── contact.css             Contact form styles
├── contact.js              Contact form logic (EmailJS)
├── skills/
│   ├── skills.html         Detailed skills page
│   └── skills.css
├── src/
│   ├── main.jsx            About Me gallery
│   ├── connexion_journey.jsx
│   ├── AccordionGallery.jsx
│   ├── AccordionGallery.css
│   ├── data_journey.js     English journey content
│   └── data_journey_fr.js  French journey content
└── public/
    └── images/             Journey photos and visual assets
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ryme-YACOUBI/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### Production Build

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Configuration

### Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/).

Configure your Service ID, Template ID and Public Key in `contact.js`.

For security, configure allowed domains in your EmailJS dashboard to restrict usage to your website's domain.

### Adding a Translation

1. Add the translation key to both the `en` and `fr` objects in `translations.js`.
2. Add `data-i18n="yourKey"` to the corresponding HTML element.
3. For HTML attributes, use `data-i18n-attr="placeholder:yourKey"`.

### Adding a Journey Card

Add an object containing `{ title, subtitle, text, image }` to both `data_journey.js` and `data_journey_fr.js`.

Place the corresponding image in `public/images/`.

---

## Deployment

The portfolio is deployed using **Vercel**.

**Production URL:**  
https://portfolio-five-beta-q4ml5sfvny.vercel.app/

The website is publicly accessible through the production deployment.

---

## Credits

Photos and fonts: credits are listed on the About page.

## Author

**Ryme Yacoubi**  
IT Engineering Student

- **Portfolio:** [Visit my website](https://portfolio-five-beta-q4ml5sfvny.vercel.app/)
- **GitHub:** [Ryme-YACOUBI](https://github.com/Ryme-YACOUBI)
- **LinkedIn:** [Ryme Yacoubi](https://www.linkedin.com/in/ryme-yacoubi-a34618385/)
