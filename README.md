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

## Customer reviews (Firebase)

Visitors can write a review on the Reviews page. Reviews are stored in Firebase Cloud Firestore (free plan) and only appear on the site after you approve them.

One-time setup:

1. Go to https://console.firebase.google.com, click **Add project**, and create a project (Google Analytics is not needed).
2. **Build > Firestore Database > Create database**. Pick a location near you (for example `asia-south1`) and start in **production mode**.
3. Open the **Rules** tab, replace everything with the contents of [`firestore.rules`](firestore.rules), and click **Publish**.
4. **Project settings (gear icon) > General > Your apps > Web (`</>`)**. Register an app (no hosting needed) and copy `apiKey` and `projectId` into `FIREBASE` in [`src/data.js`](src/data.js). These values are safe to publish; the rules protect the data.
5. Commit and push. The site redeploys automatically.

Approving reviews: open **Firestore Database > Data > reviews**, click a review, and change `approved` from `false` to `true`. To remove a review, delete its document there.

Until `FIREBASE` is filled in, the review form opens the visitor's email app with their review addressed to you.
