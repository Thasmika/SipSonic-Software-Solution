import PageHero from '../components/PageHero.jsx'
import ServiceDetails from '../components/ServiceDetails.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { SERVICES } from '../data.js'
import { to } from '../links.js'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services' }]}
        eyebrow="What we build"
        title="Software services that make your business"
        accent="smarter"
        text="From intelligent AI agents and AI-powered dashboards to polished mobile and web apps, we turn your ideas into products people love to use, at a reasonable price."
      >
        <div className="jump-links">
          {SERVICES.map((s) => (
            <a key={s.slug} href={to(`services/#${s.slug}`)}>
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>
      <ServiceDetails />
      <Faq />
      <CtaBand />
    </>
  )
}
