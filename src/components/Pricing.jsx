import Reveal, { SectionHead } from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import { PRICING, PRICING_PERKS } from '../data.js'
import { to } from '../links.js'

export default function Pricing({ showHead = true }) {
  return (
    <section id="pricing" className="section">
      <div className="container">
        {showHead && (
          <SectionHead
            eyebrow="Affordable pricing"
            title="Quality software at a"
            accent="reasonable price"
            text="Big-company quality without the big-company price. Every project gets a clear, fair quote based on what you really need."
          />
        )}
        <div className="pricing-grid">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <TiltCard className={`price-card ${p.popular ? 'popular' : ''}`} max={8}>
                {p.popular && <span className="badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <p className="price-tag">{p.tagline}</p>
                <div className="price-amount">
                  <span className="grad">Affordable</span>
                  <small>Custom quote for your project</small>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="tick">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={to('contact/')} className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'} btn-block`}>
                  {p.cta} <Icon name="arrow" size={18} />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="perks">
          {PRICING_PERKS.map((k) => (
            <span key={k}>
              <Icon name="tag" size={16} /> {k}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
