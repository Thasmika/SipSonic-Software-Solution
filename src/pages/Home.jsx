import Hero from '../components/Hero.jsx'
import TechMarquee from '../components/TechMarquee.jsx'
import Stats from '../components/Stats.jsx'
import Services from '../components/Services.jsx'
import Products from '../components/Products.jsx'
import MissionVision from '../components/MissionVision.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Process from '../components/Process.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Stats />
      <Services />
      <Products limit={3} showAll />
      <MissionVision />
      <WhyUs />
      <Process />
      <CtaBand />
    </>
  )
}
