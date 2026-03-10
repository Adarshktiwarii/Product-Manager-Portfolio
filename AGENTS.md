# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **purely static website** (HTML, CSS, vanilla JavaScript) with no build system, no package manager, no bundler, and no automated tests. There is no `package.json`, `Makefile`, or Docker configuration.

### Running the dev server

Serve the site locally with any static file server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

### Linting / Testing / Building

- **No linter** is configured in this repo.
- **No automated tests** exist. Manual browser testing is the only way to verify changes.
- **No build step** is required — files are served as-is.

### Key files

| File | Purpose |
|---|---|
| `index.html` | Main single-page site |
| `css/styles.css` | All styling |
| `js/main.js` | Core interactivity |
| `js/data.js` | Content data (services, case studies, experience) |
| `js/chat.js` | AI chat widget (Google Gemini API, key is hardcoded) |
| `js/analytics.js` | Analytics tracking (Mixpanel, Google Analytics) |

### External services (all optional for local dev)

- **Formspree**: contact form submissions (endpoint embedded in HTML)
- **Google Gemini API**: powers the "Ask AI" chat widget (API key in `js/chat.js`)
- **Mixpanel / Google Analytics**: analytics tracking (tokens in `index.html`)

### Deployment

See `README.md` for AWS S3/CloudFront (dev) and AWS Amplify (prod) deployment workflows.
