import Reveal, { SectionHead } from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import { MISSION, VISION, VALUES } from '../data.js'

export default function MissionVision() {
  return (
    <section id="mission" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Who we are"
          title="Driven by purpose,"
          accent="built for the future"
          text="Everything we build is guided by a clear mission and a bold vision for what smart software can do for businesses."
        />
        <div className="mv-grid">
          <Reveal>
            <TiltCard className="mv-card mv-mission" max={8}>
              <div className="mv-icon">
                <Icon name="target" size={30} />
              </div>
              <h3>{MISSION.title}</h3>
              <p>{MISSION.text}</p>
              <span className="mv-bg-word" aria-hidden="true">
                Mission
              </span>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.12}>
            <TiltCard className="mv-card mv-vision" max={8}>
              <div className="mv-icon">
                <Icon name="eye" size={30} />
              </div>
              <h3>{VISION.title}</h3>
              <p>{VISION.text}</p>
              <span className="mv-bg-word" aria-hidden="true">
                Vision
              </span>
            </TiltCard>
          </Reveal>
        </div>
        <div className="values">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={0.1 + i * 0.08} className="value">
              <span className="value-icon">
                <Icon name={v.icon} size={20} />
              </span>
              <div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
