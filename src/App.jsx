import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Founder from './components/Founder.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
