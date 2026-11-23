// Inline SVG illustrations for the service cards on the Services page (one per service slug).
// Drawn in the brand palette so they sit on the dark card background, with light CSS animation.

const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#00C2FF" />
      <stop offset="1" stopColor="#5B3BF5" />
    </linearGradient>
    <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#00C2FF" stopOpacity=".45" />
      <stop offset="1" stopColor="#00C2FF" stopOpacity="0" />
    </linearGradient>
  </defs>
)

const panel = { fill: 'rgba(255,255,255,.05)', stroke: 'rgba(127,219,255,.28)', strokeWidth: 1.2 }
const line = (w, o = 0.22) => ({ fill: `rgba(255,255,255,${o})`, width: w, height: 6, rx: 3 })

function AiAgents() {
  const id = 'sa-ai'
  return (
    <svg viewBox="0 0 360 180" className="service-art-svg">
      <Defs id={id} />
      {/* document being read */}
      <g className="sa-float">
        <rect x="14" y="30" width="96" height="120" rx="12" {...panel} />
        <rect x="28" y="48" {...line(52, 0.4)} />
        <rect x="28" y="64" {...line(68)} />
        <rect x="28" y="78" {...line(60)} />
        <rect x="28" y="92" {...line(66)} />
        <rect x="28" y="106" {...line(44)} />
        <rect x="28" y="124" width="36" height="14" rx="5" fill={`url(#${id}-g)`} opacity=".8" />
        <rect className="sa-scan" x="20" y="44" width="84" height="3" rx="1.5" fill="#00C2FF" />
      </g>
      {/* connections */}
      <path d="M112 90 C 140 90, 140 90, 158 90" stroke="rgba(127,219,255,.5)" strokeWidth="2" strokeDasharray="4 5" className="sa-dash" fill="none" />
      <path d="M222 90 C 238 90, 238 52, 254 52" stroke="rgba(127,219,255,.5)" strokeWidth="2" strokeDasharray="4 5" className="sa-dash" fill="none" />
      <path d="M222 90 C 238 90, 238 128, 254 128" stroke="rgba(127,219,255,.5)" strokeWidth="2" strokeDasharray="4 5" className="sa-dash" fill="none" />
      {/* agent node */}
      <circle cx="190" cy="90" r="40" fill="rgba(91,59,245,.18)" className="sa-pulse" />
      <circle cx="190" cy="90" r="30" fill={`url(#${id}-g)`} />
      <rect x="176" y="80" width="28" height="22" rx="7" fill="none" stroke="#fff" strokeWidth="2.4" />
      <circle cx="185" cy="91" r="2.6" fill="#fff" />
      <circle cx="195" cy="91" r="2.6" fill="#fff" />
      <path d="M190 80 v-6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      {/* chat replies */}
      <g className="sa-float sa-delay1">
        <rect x="256" y="34" width="92" height="36" rx="12" {...panel} />
        <rect x="268" y="45" {...line(64, 0.4)} />
        <rect x="268" y="56" {...line(42)} />
      </g>
      <g className="sa-float sa-delay2">
        <rect x="256" y="110" width="92" height="36" rx="12" fill={`url(#${id}-g)`} opacity=".85" />
        <circle cx="280" cy="128" r="3.4" fill="#fff" className="sa-blink" />
        <circle cx="294" cy="128" r="3.4" fill="#fff" className="sa-blink sa-delay1" />
        <circle cx="308" cy="128" r="3.4" fill="#fff" className="sa-blink sa-delay2" />
      </g>
    </svg>
  )
}

function AiDashboards() {
  const id = 'sa-dash'
  const bars = [46, 70, 58, 92, 80]
  return (
    <svg viewBox="0 0 360 180" className="service-art-svg">
      <Defs id={id} />
      <rect x="10" y="14" width="214" height="152" rx="14" {...panel} />
      <rect x="26" y="28" {...line(70, 0.4)} />
      {/* area chart */}
      <path d="M26 132 L58 110 L90 118 L122 88 L154 96 L186 62 L208 70 L208 150 L26 150 Z" fill={`url(#${id}-fade)`} />
      <path d="M26 132 L58 110 L90 118 L122 88 L154 96 L186 62 L208 70" stroke="#00C2FF" strokeWidth="2.6" fill="none" strokeLinejoin="round" className="sa-draw" />
      {/* forecast */}
      <path d="M208 70 L222 52" stroke="#8B6CFF" strokeWidth="2.6" strokeDasharray="4 4" fill="none" />
      <circle cx="186" cy="62" r="5" fill="#fff" stroke="#00C2FF" strokeWidth="2.6" className="sa-blink" />
      {/* side tiles */}
      <g className="sa-float">
        <rect x="236" y="14" width="114" height="64" rx="14" {...panel} />
        <rect x="250" y="28" {...line(40)} />
        <text x="250" y="62" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Poppins, sans-serif">+24%</text>
        <path d="M318 58 l8 -10 l8 10" stroke="#25D366" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="sa-float sa-delay1">
        <rect x="236" y="90" width="114" height="76" rx="14" {...panel} />
        {bars.map((h, i) => (
          <rect key={i} x={250 + i * 19} y={156 - h * 0.55} width="11" height={h * 0.55} rx="3" fill={`url(#${id}-g)`} className="sa-bar" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </g>
      {/* AI insight sparkle */}
      <g className="sa-spin-slow" style={{ transformOrigin: '196px 34px' }}>
        <path d="M196 22 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3 z" fill="#7FDBFF" />
      </g>
    </svg>
  )
}

function WebApps() {
  const id = 'sa-web'
  return (
    <svg viewBox="0 0 360 180" className="service-art-svg">
      <Defs id={id} />
      <rect x="30" y="10" width="300" height="160" rx="14" {...panel} />
      <path d="M30 24 a14 14 0 0 1 14 -14 h272 a14 14 0 0 1 14 14 v14 h-300 z" fill="rgba(255,255,255,.06)" />
      <circle cx="48" cy="24" r="4" fill="#FF6B8B" />
      <circle cx="62" cy="24" r="4" fill="#FFC857" />
      <circle cx="76" cy="24" r="4" fill="#25D366" />
      <rect x="96" y="18" width="150" height="12" rx="6" fill="rgba(255,255,255,.1)" />
      {/* sidebar */}
      <rect x="42" y="50" width="56" height="108" rx="10" fill="rgba(255,255,255,.04)" />
      <rect x="52" y="62" {...line(36, 0.45)} />
      <rect x="52" y="78" {...line(30)} />
      <rect x="52" y="92" {...line(34)} />
      <rect x="52" y="106" {...line(26)} />
      {/* hero block */}
      <rect x="110" y="50" width="208" height="52" rx="10" fill={`url(#${id}-g)`} opacity=".85" className="sa-shimmer" />
      <rect x="124" y="64" {...line(90, 0.8)} />
      <rect x="124" y="80" {...line(60, 0.5)} />
      {/* cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} className="sa-float" style={{ animationDelay: `${i * 0.4}s` }}>
          <rect x={110 + i * 71} y="112" width="63" height="46" rx="9" {...panel} />
          <circle cx={124 + i * 71} cy="126" r="6" fill="rgba(127,219,255,.6)" />
          <rect x={118 + i * 71} y="140" {...line(40)} />
        </g>
      ))}
      {/* cursor */}
      <path className="sa-cursor" d="M0 0 l0 16 l4.5 -4 l3 7 l3 -1.3 l-3 -6.7 l6 0 z" fill="#fff" stroke="#0B1E3F" strokeWidth="1" />
    </svg>
  )
}

function MobileApps() {
  const id = 'sa-mob'
  return (
    <svg viewBox="0 0 360 180" className="service-art-svg">
      <Defs id={id} />
      {/* back phone */}
      <g opacity=".55" transform="rotate(-10 120 96)">
        <rect x="86" y="22" width="76" height="146" rx="16" {...panel} />
        <rect x="98" y="46" width="52" height="40" rx="8" fill="rgba(127,219,255,.2)" />
        <rect x="98" y="96" {...line(46)} />
        <rect x="98" y="110" {...line(32)} />
      </g>
      {/* main phone */}
      <g className="sa-float">
        <rect x="150" y="6" width="90" height="168" rx="18" fill="#0E2550" stroke="rgba(127,219,255,.45)" strokeWidth="1.6" />
        <rect x="183" y="14" width="24" height="5" rx="2.5" fill="rgba(255,255,255,.25)" />
        {/* camera view with detection box */}
        <rect x="160" y="28" width="70" height="70" rx="10" fill={`url(#${id}-g)`} opacity=".35" />
        <circle cx="195" cy="60" r="14" fill="rgba(255,255,255,.35)" />
        <path d="M181 92 q14 -20 28 0" fill="rgba(255,255,255,.35)" />
        <g className="sa-blink">
          <path d="M172 40 h-6 v8 M218 40 h6 v8 M172 90 h-6 v-8 M218 90 h6 v-8" stroke="#7FDBFF" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
        <rect x="160" y="108" {...line(56, 0.4)} />
        <rect x="160" y="122" {...line(40)} />
        <rect x="160" y="142" width="70" height="20" rx="10" fill={`url(#${id}-g)`} />
      </g>
      {/* store / offline badges */}
      <g className="sa-float sa-delay1">
        <rect x="254" y="34" width="92" height="34" rx="12" {...panel} />
        <circle cx="272" cy="51" r="7" fill="#25D366" />
        <path d="M268.5 51 l2.5 2.5 l4.5 -5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="285" y="48" {...line(48, 0.35)} />
      </g>
      <g className="sa-float sa-delay2">
        <rect x="254" y="108" width="92" height="34" rx="12" {...panel} />
        <path d="M266 130 q0 -12 12 -12 q8 0 10 7 q8 0 8 6 q0 5 -6 5 h-20 q-4 0 -4 -6z" fill="none" stroke="#7FDBFF" strokeWidth="1.8" />
        <rect x="302" y="122" {...line(34, 0.35)} />
      </g>
      <g className="sa-float sa-delay1">
        <rect x="14" y="74" width="60" height="34" rx="12" {...panel} />
        <path d="M30 91 l6 -8 l6 8 l6 -8 l6 8" stroke="#7FDBFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

function CustomSoftware() {
  const id = 'sa-cus'
  const mods = [
    { x: 20, y: 18, label: 'HR' },
    { x: 20, y: 120, label: 'Stock' },
    { x: 268, y: 18, label: 'Fleet' },
    { x: 268, y: 120, label: 'Invoice' },
  ]
  return (
    <svg viewBox="0 0 360 180" className="service-art-svg">
      <Defs id={id} />
      {mods.map((m) => {
        const cx = m.x + 36
        const cy = m.y + 21
        return (
          <path key={m.label} d={`M${cx} ${cy} C ${(cx + 180) / 2} ${cy}, ${(cx + 180) / 2} 90, 180 90`} stroke="rgba(127,219,255,.45)" strokeWidth="2" strokeDasharray="4 5" className="sa-dash" fill="none" />
        )
      })}
      {/* hub with gear */}
      <circle cx="180" cy="90" r="46" fill="rgba(91,59,245,.16)" className="sa-pulse" />
      <circle cx="180" cy="90" r="34" fill={`url(#${id}-g)`} />
      <g className="sa-spin" style={{ transformOrigin: '180px 90px' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="176" y="66" width="8" height="10" rx="2" fill="#fff" transform={`rotate(${i * 45} 180 90)`} />
        ))}
        <circle cx="180" cy="90" r="15" fill="none" stroke="#fff" strokeWidth="5" />
      </g>
      {mods.map((m, i) => (
        <g key={m.label} className="sa-float" style={{ animationDelay: `${i * 0.35}s` }}>
          <rect x={m.x} y={m.y} width="72" height="42" rx="12" {...panel} />
          <circle cx={m.x + 16} cy={m.y + 21} r="6" fill={`url(#${id}-g)`} />
          <text x={m.x + 28} y={m.y + 25.5} fill="#CFEFFF" fontSize="12" fontWeight="600" fontFamily="Poppins, sans-serif">{m.label}</text>
        </g>
      ))}
    </svg>
  )
}

const ART = {
  'ai-agents': AiAgents,
  'ai-dashboards': AiDashboards,
  'web-apps': WebApps,
  'mobile-apps': MobileApps,
  'custom-software': CustomSoftware,
}

export default function ServiceArt({ slug }) {
  const Art = ART[slug]
  if (!Art) return null
  return (
    <div className="service-art" aria-hidden="true">
      <Art />
    </div>
  )
}
