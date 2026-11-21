import { TECH } from '../data.js'

export default function TechMarquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="marquee" aria-label="Technologies we use">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">
            <i /> {t}
          </span>
        ))}
      </div>
    </div>
  )
}
