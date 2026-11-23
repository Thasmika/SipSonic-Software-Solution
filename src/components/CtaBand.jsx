import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'
import { whatsappLink } from './WhatsAppButton.jsx'
import { to } from '../links.js'

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us your idea and get a free consultation and a clear quote within 24 hours.',
}) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <a href={to('contact/')} className="btn btn-light">
              Start Your Project <Icon name="arrow" size={18} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              <Icon name="whatsapp" size={18} /> WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
