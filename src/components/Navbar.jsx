import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { NAV } from '../data.js'
import { CURRENT_PAGE, to } from '../links.js'

// A product detail page highlights "Products" in the menu.
const activePage = CURRENT_PAGE === 'product' ? 'products' : CURRENT_PAGE

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (n, extra = {}) => (
    <a
      key={n.page}
      href={to(n.href)}
      className={activePage === n.page ? 'active' : ''}
      aria-current={activePage === n.page ? 'page' : undefined}
      {...extra}
    >
      {n.label}
    </a>
  )

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          {NAV.map((n) => link(n))}
        </nav>
        <a href={to('contact/')} className="btn btn-primary btn-sm nav-cta">
          Start a Project
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {NAV.map((n) => link(n, { onClick: () => setOpen(false) }))}
            <a href={to('contact/')} className="btn btn-primary" onClick={() => setOpen(false)}>
              Start a Project
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
