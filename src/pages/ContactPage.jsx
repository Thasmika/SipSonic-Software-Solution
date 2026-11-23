import PageHero from '../components/PageHero.jsx'
import Contact from '../components/Contact.jsx'
import Faq from '../components/Faq.jsx'

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Contact us"
        title="Let's talk about your"
        accent="project"
        text="Free consultation, clear quote, and a reply within 24 hours. Call, WhatsApp or send us a message below."
      />
      <Contact compact />
      <Faq />
    </>
  )
}
