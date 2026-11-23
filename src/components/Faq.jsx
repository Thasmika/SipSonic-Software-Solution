import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import Icon from './Icons.jsx'
import { FAQ } from '../data.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHead
          eyebrow="FAQ"
          title="Your questions,"
          accent="answered"
          text="Can't find your answer here? Message us on WhatsApp and we'll reply quickly."
        />
        <div className="faq-list">
          {FAQ.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="faq-toggle">
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
