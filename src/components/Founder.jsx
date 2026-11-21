import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { LogoIcon } from './Logo.jsx'

const SKILLS = ['AI Agents & RAG', 'Computer Vision', 'Document AI', 'Full-Stack Web', 'React Native', 'Cloud & DevOps']

export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="container founder-grid">
        <Reveal className="founder-visual">
          <TiltCard className="founder-card" max={10}>
            <div className="avatar">
              <div className="avatar-ring" />
              <div className="avatar-core">TC</div>
            </div>
            <h3>Thasmika Chamath</h3>
            <p className="founder-role grad">Founder · Professional AI Engineer</p>
            <p className="founder-degree">BSc (Hons) Data Science (UK)</p>
            <div className="founder-logo">
              <LogoIcon size={28} /> SipSonic Software Solutions
            </div>
          </TiltCard>
        </Reveal>
        <div className="founder-copy">
          <Reveal>
            <span className="eyebrow">Meet the founder</span>
            <h2>
              Built by an engineer who <span className="grad">ships real AI</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              SipSonic was founded by Thasmika Chamath, a Professional AI Engineer who builds production AI systems every
              day, from intelligent document processing platforms and AI invoice checkers to computer-vision mobile apps
              and full HR and fleet management systems.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              That hands-on experience is what every SipSonic client gets: practical AI that solves real business
              problems, clean modern code and a partner who cares about your results.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="skills">
            {SKILLS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
