import PageHero from '../components/PageHero.jsx'
import Pricing from '../components/Pricing.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Pricing' }]}
        eyebrow="Affordable pricing"
        title="Quality software at a"
        accent="reasonable price"
        text="Big-company quality without the big-company price. Every project gets a clear, fair quote based on what you really need, with no hidden costs."
      />
      <Pricing showHead={false} />
      <Faq />
      <CtaBand title="Get your free quote today" text="Tell us what you need and we'll send a clear, fixed quote within 24 hours. No obligation." />
    </>
  )
}
