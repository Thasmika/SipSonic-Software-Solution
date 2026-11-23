import PageHero from '../components/PageHero.jsx'
import Founder from '../components/Founder.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Stats from '../components/Stats.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About' }]}
        eyebrow="About SipSonic"
        title="Knowledge, delivered at the"
        accent="speed of sound"
        text="SipSonic is an AI-powered software company from Sri Lanka. We build practical AI, web and mobile software that helps businesses work smarter, at a price that makes sense."
      />
      <Founder />
      <Stats />
      <WhyUs />
      <CtaBand title="Let's build something great together" />
    </>
  )
}
