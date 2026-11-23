import Logo from './Logo.jsx'
import { CONTACT, NAV, SERVICES } from '../data.js'
import { to } from '../links.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Smart Software. Built Fast.
            <br />
            AI Agents • AI Dashboards • Web Apps • Mobile Apps • Custom Software
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <h4>Company</h4>
          {NAV.map((n) => (
            <a key={n.page} href={to(n.href)}>
              {n.label}
            </a>
          ))}
        </nav>
        <nav className="footer-links" aria-label="Services">
          <h4>Services</h4>
          {SERVICES.map((s) => (
            <a key={s.slug} href={to(`services/#${s.slug}`)}>
              {s.title}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>Sri Lanka · Working worldwide</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SipSonic Software Solutions. All rights reserved.</span>
        <span className="footer-legal">
          <a href={to('privacy/')}>Privacy Policy</a>
          <a href={to('terms/')}>Terms of Service</a>
        </span>
      </div>
    </footer>
  )
}
