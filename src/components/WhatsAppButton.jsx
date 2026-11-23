import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icons.jsx'
import { CONTACT } from '../data.js'

export const whatsappLink = `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(
  'Hi SipSonic! I would like to discuss a software project.'
)}`

export default function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="wa-fab"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon name="whatsapp" size={28} />
          <span className="wa-fab-label">Chat with us</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
