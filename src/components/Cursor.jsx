import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Soft glowing light that follows the mouse (desktop only)
export default function Cursor() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      if (e.pointerType !== 'mouse') return
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />
}
