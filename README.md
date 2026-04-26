# Gospel Journey

An interactive path through Scripture to understand the good news of Jesus Christ.

## Mission

Gospel Journey is designed to help visitors understand the Gospel clearly, personally, and biblically - from creation and sin to the cross, resurrection, and the invitation to receive salvation by grace through faith.

## Stack

- Vite
- TypeScript
- HTML/CSS
- Vanilla TypeScript

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Multi-page Routes

- Home: `index.html`
- Journey: `journey.html`
- Who Is Jesus?: `who-is-jesus.html`
- Why Do I Need Saving?: `why-saving.html`
- The Scarlet Thread: `scarlet-thread.html`
- Ready to Respond?: `respond.html`
- New Believer Next Steps: `next-steps.html`
- Scripture Library: `scripture-library.html`
- Prayer Response: `prayer-response.html`
- About: `about.html`

## GitHub Pages

- Vite is configured with `base: './'` in `vite.config.ts` for project-page compatibility.
- Automated deploy workflow is included at `.github/workflows/deploy-pages.yml`.
- In GitHub repository settings, set **Pages** source to **GitHub Actions**.

## Privacy

- No tracking or analytics by default
- No accounts
- No backend
- Optional reflection/progress data uses localStorage only
