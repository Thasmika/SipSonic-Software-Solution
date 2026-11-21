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

## Edit content
- Text, services, process steps, tech list, contact details: `src/data.js`
- 3D logo scene: `src/components/HeroScene.jsx`
- Colours and styles: `src/index.css`
