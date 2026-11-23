import { motion } from 'framer-motion'
import { to } from '../links.js'

const up = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
})

// Header used at the top of every inner page. `crumbs`: [{ label, href? }] after "Home".
export default function PageHero({ eyebrow, title, accent, text, crumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.nav className="crumbs" aria-label="Breadcrumb" {...up(0)}>
          <a href={to('')}>Home</a>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="crumb-sep">/</span>
              {c.href ? <a href={to(c.href)}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </motion.nav>
        {eyebrow && (
          <motion.span className="eyebrow" {...up(0.05)}>
            {eyebrow}
          </motion.span>
        )}
        <motion.h1 {...up(0.12)}>
          {title} {accent && <span className="grad">{accent}</span>}
        </motion.h1>
        {text && (
          <motion.p className="page-hero-text" {...up(0.22)}>
            {text}
          </motion.p>
        )}
        {children && <motion.div {...up(0.3)}>{children}</motion.div>}
      </div>
    </section>
  )
}
