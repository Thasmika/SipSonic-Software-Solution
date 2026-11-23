import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { STATS } from '../data.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="stat-value">
      {n}
      <span className="grad">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats-section" aria-label="SipSonic in numbers">
      <div className="container">
        <Reveal className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <Counter value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
