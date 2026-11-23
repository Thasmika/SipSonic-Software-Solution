import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { NAV } from '../data.js'
import { to } from '../links.js'

export default function NotFound() {
  return (
    <section className="page-hero notfound">
      <div className="container">
        <Reveal>
          <span className="notfound-code grad">404</span>
          <h1>This page doesn't exist</h1>
          <p className="page-hero-text">The link may be old or mistyped. Here are some places you can go instead:</p>
          <div className="jump-links">
            {NAV.map((n) => (
              <a key={n.page} href={to(n.href)}>
                {n.label}
              </a>
            ))}
          </div>
          <a href={to('')} className="btn btn-primary">
            Back to home <Icon name="arrow" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
