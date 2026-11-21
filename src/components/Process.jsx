import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal.jsx'
import { PROCESS } from '../data.js'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead
          eyebrow="How we work"
          title="From idea to launch in"
          accent="four steps"
          text="A clear, transparent process so you always know what is happening and what comes next."
        />
        <div className="process" ref={ref}>
          <div className="process-line">
            <motion.span style={{ width }} />
          </div>
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.12} className="process-step">
              <div className="step-orb">
                <span>{p.step}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
