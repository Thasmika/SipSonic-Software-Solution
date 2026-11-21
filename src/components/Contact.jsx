import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'
import { CONTACT } from '../data.js'

const TYPES = ['AI Agent', 'Web App', 'Mobile App', 'Custom Software', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: TYPES[0], message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  function submit(e) {
    e.preventDefault()
    const subject = `New project enquiry: ${form.type}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const wa = `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent('Hi SipSonic! I would like to discuss a software project.')}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <Reveal>
              <span className="eyebrow">Let's talk</span>
              <h2>
                Let's build your software <span className="grad">together</span>
              </h2>
              <p>Tell us about your idea. We reply within 24 hours with next steps and a free consultation.</p>
            </Reveal>
            <Reveal delay={0.1} className="contact-links">
              <a href={`tel:+${CONTACT.phoneRaw}`} className="contact-link">
                <span className="ci"><Icon name="call" size={20} /></span>
                <span><small>Call us</small>{CONTACT.phone}</span>
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="contact-link">
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
              <button className="btn btn-primary btn-block" type="submit">
                Send Message <Icon name="arrow" size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
