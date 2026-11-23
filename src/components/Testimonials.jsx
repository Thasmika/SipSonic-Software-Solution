import Reveal, { SectionHead } from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Icon from './Icons.jsx'
import { TESTIMONIALS } from '../data.js'

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Testimonials({ showHead = true }) {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        {showHead && (
          <SectionHead
            eyebrow="Client reviews"
            title="What our clients"
            accent="say"
            text="Businesses that trusted us with their software, in their own words."
          />
        )}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TiltCard className="testimonial-card" max={8}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, k) => (
                    <Icon key={k} name="star" size={16} />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <div className="reviewer">
                  <span className="reviewer-avatar">
                    {t.photo ? <img src={import.meta.env.BASE_URL + t.photo} alt="" /> : initials(t.name)}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>
                      {t.role}, {t.company}
                    </small>
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
