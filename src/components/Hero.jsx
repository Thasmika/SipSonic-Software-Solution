import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icons.jsx'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

const WORDS = ['AI Agents', 'Web Apps', 'Mobile Apps', 'Custom Software']

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
      <motion.span
        key={WORDS[i]}
        className="grad"
        initial={{ y: '100%', opacity: 0, rotateX: -70 }}
        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {WORDS[i]}
      </motion.span>
      </AnimatePresence>
    </span>
  )
}

const up = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="pill" {...up(0.1)}>
            <span className="dot" /> AI-powered software studio · Sri Lanka
          </motion.span>
          <motion.h1 {...up(0.2)}>
            Smart Software.
            <br />
            <span className="grad">Built Fast.</span>
          </motion.h1>
          <motion.p className="hero-sub" {...up(0.35)}>
            We design and build <RotatingWord />
            <br />
            that help your business grow, all at a <strong className="hl">reasonable price</strong>.
          </motion.p>
          <motion.div className="hero-ctas" {...up(0.5)}>
            <a href="#contact" className="btn btn-primary">
              Start Your Project <Icon name="arrow" size={18} />
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore Services
            </a>
          </motion.div>
          <motion.ul className="hero-badges" {...up(0.65)}>
            <li><Icon name="bot" size={18} /> AI Agents</li>
            <li><Icon name="globe" size={18} /> Web</li>
            <li><Icon name="phone" size={18} /> Mobile</li>
            <li><Icon name="cpu" size={18} /> Custom</li>
            <li><Icon name="tag" size={18} /> Affordable</li>
          </motion.ul>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glow" />
          <Suspense fallback={<div className="scene-loading" />}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>
      <a href="#services" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
