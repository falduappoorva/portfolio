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

## Security Baseline

This repo includes a practical security baseline for both code and Vercel deployment:

- Security headers via `vercel.json` (CSP, HSTS, frame and MIME protections)
- Dependency audit checks via npm scripts and CI
- Reusable rate-limiter helper for future API routes

Run checks locally:

```bash
npm run security:check
```

Run only vulnerability audit:

```bash
npm run security:audit
```

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. Import the repo into Vercel.
3. Deploy with default settings.
4. Add your custom domain `appoorvafaldu.com` in Vercel.

Recommended Vercel hardening:

1. Enable 2FA on Vercel, GitHub, and your domain registrar.
2. Keep least-privilege project/team roles.
3. Store secrets only in Vercel Environment Variables.
4. Enable branch protection + required pull request reviews.
5. Review deployment logs for secret leaks.
6. Enable Vercel WAF/Bot protection where available.

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

## Future API Rate Limiting

This project is currently static-exported, so no API routes are active.

If you add API routes later, use `lib/security/rateLimit.js` inside route handlers to enforce per-IP throttling.
