import { to } from '../links.js'

export function LogoIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="lg-logo" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0" stopColor="#00C2FF" />
          <stop offset="1" stopColor="#5B3BF5" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#lg-logo)" strokeWidth="8" />
      <path d="M26 60 C38 32 50 32 60 60 S84 88 94 60" fill="none" stroke="url(#lg-logo)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="26" cy="60" r="6" fill="#00C2FF" />
      <circle cx="94" cy="60" r="6" fill="#5B3BF5" />
    </svg>
  )
}

export default function Logo() {
  return (
    <a href={to('')} className="logo" aria-label="SipSonic Software Solutions home">
      <LogoIcon />
      <span className="logo-text">
        <span className="logo-word">
          Sip<span className="grad">Sonic</span>
        </span>
        <span className="logo-sub">SOFTWARE SOLUTIONS</span>
      </span>
    </a>
  )
}
