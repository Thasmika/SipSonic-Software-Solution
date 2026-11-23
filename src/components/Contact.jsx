import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'
import { CONTACT } from '../data.js'
import { whatsappLink } from './WhatsAppButton.jsx'
import { to } from '../links.js'

const TYPES = ['AI Agent', 'AI Dashboard', 'Web App', 'Mobile App', 'Custom Software', 'Not sure yet']

export default function Contact({ compact = false }) {
  const empty = { name: '', email: '', type: TYPES[0], message: '' }
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const subject = `New project enquiry: ${form.type}`

  function openMailApp() {
    const body = `Name: ${form.name}
Email: ${form.email}
Project type: ${form.type}

${form.message}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function submit(e) {
    e.preventDefault()
    if (e.currentTarget.botcheck?.checked) return // spam bot filled the hidden field
    if (!CONTACT.formKey) return openMailApp()

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT.formKey,
          subject,
          from_name: 'SipSonic Website',
          name: form.name,
          email: form.email,
          project_type: form.type,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${compact ? 'contact-compact' : ''}`}>
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <Reveal>
              <span className="eyebrow">{compact ? 'Reach us directly' : "Let's talk"}</span>
              {compact ? (
                <h2 className="contact-h-sm">
                  Prefer to <span className="grad">talk</span>?
                </h2>
              ) : (
                <h2>
                  Let's build your software <span className="grad">together</span>
                </h2>
              )}
              <p>
                {compact
                  ? 'Call or WhatsApp us for a quick chat, or fill in the form and we will get back to you within 24 hours.'
                  : 'Tell us about your idea. We reply within 24 hours with next steps and a free consultation.'}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="contact-links">
              <a href={`tel:+${CONTACT.phoneRaw}`} className="contact-link">
                <span className="ci"><Icon name="call" size={20} /></span>
                <span><small>Call us</small>{CONTACT.phone}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-link">
                <span className="ci"><Icon name="whatsapp" size={20} /></span>
                <span><small>WhatsApp</small>Chat with us</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="contact-link">
                <span className="ci"><Icon name="mail" size={20} /></span>
                <span><small>Email</small>{CONTACT.email}</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="contact-form-wrap">
            <form className="contact-form" onSubmit={submit}>
              <div className="field">
                <label htmlFor="cf-name">Your name</label>
                <input id="cf-name" required value={form.name} onChange={set('name')} placeholder="John Perera" />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" />
              </div>
              <div className="field">
                <span className="label">What do you need?</span>
                <div className="chips">
                  {TYPES.map((t) => (
                    <button type="button" key={t} className={form.type === t ? 'chip on' : 'chip'} onClick={() => setForm({ ...form, type: t })}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Project details</label>
                <textarea id="cf-msg" rows={4} required value={form.message} onChange={set('message')} placeholder="Tell us what you want to build..." />
              </div>
              <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Icon name="arrow" size={18} />
              </button>
              <p className="privacy-note">
                <Icon name="lock" size={14} /> Your details are kept private and never shared.{' '}
                <a href={to('privacy/')}>Privacy Policy</a>
              </p>
              {status === 'sent' && (
                <p className="form-note ok" role="status">
                  Thanks! Your message has been sent. We'll reply within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="form-note err" role="alert">
                  Sorry, the message couldn't be sent.{' '}
                  <button type="button" onClick={openMailApp}>Send it by email instead</button> or{' '}
                  <a href={whatsappLink} target="_blank" rel="noreferrer">message us on WhatsApp</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
