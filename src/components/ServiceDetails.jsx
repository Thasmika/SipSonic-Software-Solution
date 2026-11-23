import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import ServiceArt from './ServiceArt.jsx'
import { SERVICES } from '../data.js'
import { to } from '../links.js'

// Full service rows for the Services page. Each row has an id so /services/#ai-agents jumps to it.
export default function ServiceDetails() {
  return (
    <section className="section service-details">
      <div className="container">
        {SERVICES.map((s, i) => (
          <article key={s.slug} id={s.slug} className={`service-row ${i % 2 ? 'flip' : ''}`}>
            <Reveal className="service-visual">
              <TiltCard className="service-visual-card" max={10}>
                <div className="icon-3d icon-xl">
                  <Icon name={s.icon} size={54} />
                </div>
                <span className="service-visual-num">0{i + 1}</span>
                <ServiceArt slug={s.slug} />
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1} className="service-copy">
              <span className="eyebrow">Service 0{i + 1}</span>
              <h2>{s.title}</h2>
              <p className="service-lead">{s.text}</p>
              <h4>What we build</h4>
              <ul className="check-list">
                {s.details.map((d) => (
                  <li key={d}>
                    <span className="tick">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="ideal-for">
                <strong>Ideal for:</strong> {s.idealFor}
              </p>
              <a href={to('contact/')} className="btn btn-primary">
                Get a free quote <Icon name="arrow" size={18} />
              </a>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}
