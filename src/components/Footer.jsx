import Logo from './Logo.jsx'
import { NAV, CONTACT } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Smart Software. Built Fast.<br />AI Agents • Web Apps • Mobile Apps • Custom Software</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} SipSonic Software Solutions. All rights reserved.
      </div>
    </footer>
  )
}
