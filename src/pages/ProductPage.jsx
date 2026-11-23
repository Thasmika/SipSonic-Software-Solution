import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { ProductCard, asset, fmtTime } from '../components/Products.jsx'
import { PRODUCTS } from '../data.js'
import { CURRENT_SLUG, to } from '../links.js'
import NotFound from './NotFound.jsx'

const up = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function ProductPage() {
  const p = PRODUCTS.find((x) => x.slug === CURRENT_SLUG)
  const [duration, setDuration] = useState(0)
  const [failed, setFailed] = useState(false)
  if (!p) return <NotFound />

  const others = PRODUCTS.filter((x) => x.slug !== p.slug)

  return (
    <>
      <section className="page-hero product-hero">
        <div className="container">
          <motion.nav className="crumbs" aria-label="Breadcrumb" {...up(0)}>
            <a href={to('')}>Home</a>
            <span className="crumb-sep">/</span>
            <a href={to('products/')}>Products</a>
            <span className="crumb-sep">/</span>
            <span aria-current="page">{p.name}</span>
          </motion.nav>
          <motion.span className="eyebrow" {...up(0.05)}>
            {p.category}
          </motion.span>
          <motion.h1 {...up(0.12)}>{p.name}</motion.h1>
          <motion.p className="page-hero-text" {...up(0.22)}>
            {p.text}
          </motion.p>
          <motion.div className="product-meta" {...up(0.3)}>
            {p.client && (
              <span>
                <Icon name="heart" size={16} /> {p.client}
              </span>
            )}
            {duration > 0 && (
              <span>
                <Icon name="play" size={14} /> {fmtTime(duration)} demo
              </span>
            )}
          </motion.div>
        </div>
      </section>

      <section className="product-player-section">
        <div className="container">
          <motion.div
            className="product-player"
            initial={{ opacity: 0, rotateX: 14, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {p.video && !failed ? (
              <video
                src={asset(p.video)}
                poster={asset(p.poster)}
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="product-fallback">
                <Icon name="play" size={44} />
                <span>Demo video coming soon</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section product-info">
        <div className="container product-info-grid">
          <Reveal className="product-about">
            <span className="eyebrow">About this project</span>
            <h2>
              What <span className="grad">{p.name}</span> does
            </h2>
            <p>{p.about || p.text}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
          {p.features?.length > 0 && (
            <Reveal delay={0.1} className="product-features">
              <h3>Key features</h3>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="tick">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={to('contact/')} className="btn btn-primary btn-block">
                Build something similar <Icon name="arrow" size={18} />
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="More of our work" title="Other" accent="products" />
            <div className="products-grid">
              {others.slice(0, 3).map((o, i) => (
                <ProductCard key={o.slug} product={o} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Want something like this for your business?" />
    </>
  )
}
