# Glint Website

Marketing site for **Glint**, a macOS utility app that opens `.docx` and `.xlsx` files from Finder in Google Docs/Sheets.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Pages

- `/` Home page with hero + download CTA
- `/privacy` Privacy Policy
- `/terms` Terms of Service

## Customize before launch

- Update the download link in `/Users/shivanan/devel/gsuite-router-web/app/page.tsx` (`DOWNLOAD_URL`)
- Update support email in:
  - `/Users/shivanan/devel/gsuite-router-web/app/privacy/page.tsx`
  - `/Users/shivanan/devel/gsuite-router-web/app/terms/page.tsx`
