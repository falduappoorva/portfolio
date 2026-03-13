# Appoorva Faldu Portfolio

A Next.js + Tailwind + Framer Motion portfolio tailored for a senior mobile engineering and cybersecurity profile.

## Stack
- Next.js 14
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build
```bash
npm run build
```

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. Import the repo into Vercel.
3. Deploy with default settings.
4. Add your custom domain `appoorvafaldu.com` in Vercel.

## Deploy on GitHub Pages
This project is configured with `output: 'export'`.

1. Run:
   ```bash
   npm install
   npm run build
   ```
2. The static site will be generated in the `out/` folder.
3. Publish the contents of `out/` to GitHub Pages.
4. If deploying to a project subpath instead of a custom root domain, add `basePath` and `assetPrefix` to `next.config.mjs`.

## Content to update
- Email and phone in `app/page.js`
- Metadata in `app/layout.js`
- Experience, links, and project content in `app/page.js`

## Notes
- `public/avatar.png` is the selected comic-style avatar.
- Images are unoptimized to keep static export simple for GitHub Pages.
