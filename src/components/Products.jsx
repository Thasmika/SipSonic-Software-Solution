import { useEffect, useRef, useState } from 'react'
import Reveal, { SectionHead } from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import { PRODUCTS } from '../data.js'
import { to } from '../links.js'

// Files in /public are served from the site root; to() keeps paths working on GitHub Pages.
export const asset = (p) => (p ? to(p) : undefined)

export const fmtTime = (sec) => {
  const t = Math.round(sec)
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`
}

function PreviewVideo({ product, onDuration }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  // Play the muted preview only while the card is on screen.
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.4 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [failed])

  if (failed || !product.video) {
    return (
      <div className="product-fallback">
        <Icon name="play" size={34} />
        <span>Video coming soon</span>
      </div>
    )
  }

  return (
    <video
      ref={ref}
      src={asset(product.video)}
      poster={asset(product.poster)}
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedMetadata={(e) => onDuration?.(e.currentTarget.duration)}
      onError={() => setFailed(true)}
    />
  )
}

export function ProductCard({ product: p, index = 0 }) {
  const [duration, setDuration] = useState(0)
  const href = to(`products/${p.slug}/`)

  return (
    <Reveal delay={index * 0.1}>
      <TiltCard className="product-card" max={8}>
        <a className="product-media" href={href} aria-label={`View ${p.name}`}>
          <PreviewVideo product={p} onDuration={setDuration} />
          <span className="product-play">
            <Icon name="play" size={22} />
          </span>
          {duration > 0 && <span className="product-duration">{fmtTime(duration)}</span>}
        </a>
        <div className="product-body">
          <span className="product-cat">{p.category}</span>
          <h3>
            <a href={href}>{p.name}</a>
          </h3>
          <p>{p.text}</p>
          {p.client && (
            <p className="product-client">
              <Icon name="heart" size={15} /> {p.client}
            </p>
          )}
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a href={href} className="card-link">
            View project <Icon name="arrow" size={16} />
          </a>
        </div>
      </TiltCard>
    </Reveal>
  )
}

// Home page shows a few featured products with a "View all" button; the Products page shows all of them.
export default function Products({ limit, showHead = true, showAll = false, exclude }) {
  const list = PRODUCTS.filter((p) => p.slug !== exclude).slice(0, limit)

  return (
    <section id="products" className="section">
      <div className="container">
        {showHead && (
          <SectionHead
            eyebrow="Our best work"
            title="Products our customers"
            accent="love"
            text="Real software we have built and delivered. Each card plays a quick preview. Open one to watch the full demo."
          />
        )}
        <div className="products-grid">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        {showAll && (
          <Reveal className="section-more">
            <a href={to('products/')} className="btn btn-ghost">
              View all products <Icon name="arrow" size={18} />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
