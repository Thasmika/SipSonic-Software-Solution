import Reveal, { SectionHead } from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead
          eyebrow="What we build"
          title="Software that makes your business"
          accent="smarter"
          text="From intelligent AI agents to polished mobile and web apps, we turn your ideas into products people love to use."
        />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <TiltCard className="service-card">
                <div className="icon-3d">
                  <Icon name={s.icon} size={30} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="card-num">0{i + 1}</span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
