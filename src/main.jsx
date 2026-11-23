import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import { CURRENT_PAGE } from './links.js'
import './index.css'

// Each page is its own chunk, so visitors only download the page they open.
const PAGES = {
  home: lazy(() => import('./pages/Home.jsx')),
  services: lazy(() => import('./pages/ServicesPage.jsx')),
  products: lazy(() => import('./pages/ProductsPage.jsx')),
  product: lazy(() => import('./pages/ProductPage.jsx')),
  pricing: lazy(() => import('./pages/PricingPage.jsx')),
  reviews: lazy(() => import('./pages/ReviewsPage.jsx')),
  about: lazy(() => import('./pages/AboutPage.jsx')),
  contact: lazy(() => import('./pages/ContactPage.jsx')),
  privacy: lazy(() => import('./pages/LegalPage.jsx')),
  terms: lazy(() => import('./pages/LegalPage.jsx')),
  notfound: lazy(() => import('./pages/NotFound.jsx')),
}

const Page = PAGES[CURRENT_PAGE] || PAGES.notfound

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Suspense fallback={<div className="page-loading" />}>
        <Page />
      </Suspense>
    </Layout>
  </React.StrictMode>
)
