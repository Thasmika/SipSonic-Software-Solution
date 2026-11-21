import Reveal, { SectionHead } from './Reveal.jsx'
import Icon from './Icons.jsx'
import { WHY } from '../data.js'

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container why-grid">
        <div className="why-left">
          <SectionHead
            eyebrow="Why SipSonic"
            title="Knowledge at the"
            accent="speed of sound"
            text="“Sip” means knowledge in Sinhala. “Sonic” means speed. That is our promise: deep engineering know-how, delivered fast."
          />
          <Reveal delay={0.2} className="cube-wrap">
            <div className="cube">
              {['AI', 'Web', 'App', 'Cloud', 'Data', 'Code'].map((f, i) => (
                <span key={f} className={`face f${i}`}>{f}</span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="why-list">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1} className="why-item">
              <div className="why-icon">
                <Icon name={w.icon} size={24} />
              </div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
