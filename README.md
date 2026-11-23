# SipSonic Software Solutions: Company Website

Modern React website with a live 3D hero (Three.js / React Three Fiber) and scroll animations (Framer Motion).

## Run locally
```
npm install
npm run dev        # http://localhost:5173
```

## Build for hosting
```
npm run build      # output in dist/ (upload to Netlify, Vercel, Firebase Hosting, cPanel, etc.)
```

## Pages
The site has a separate page (its own URL, title and description) for:
Home, Services, Products, each product (`/products/<slug>/`), About, Contact, Privacy, Terms and a 404 page.

- Page list, titles and descriptions: `scripts/pages.mjs`
- Page layouts: `src/pages/`
- The HTML files for each page (`index.html`, `services/index.html`, ...), `public/sitemap.xml` and
  `public/robots.txt` are **generated automatically** when you run `npm run dev` or `npm run build`.
  Don't edit them by hand; they are git-ignored.
- Adding a product to `PRODUCTS` in `src/data.js` automatically creates its page.

## Edit content
- Text, services, products, reviews, stats, FAQ, contact details: `src/data.js`
- Product videos: `public/videos/` · poster images: `public/posters/` · photos: `public/images/`
- 3D logo scene: `src/components/HeroScene.jsx`
- Colours and styles: `src/index.css`
