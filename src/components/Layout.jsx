import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Cursor from './Cursor.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

// Pages render after load, so the browser can't jump to #anchors by itself. Do it once the target exists.
function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (!id) return
    let tries = 0
    const t = setInterval(() => {
      const el = document.getElementById(id)
      if (el || ++tries > 40) {
        clearInterval(t)
        el?.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
    return () => clearInterval(t)
  }, [])
}

export default function Layout({ children }) {
  useHashScroll()
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
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
