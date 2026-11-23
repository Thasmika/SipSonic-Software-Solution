import { useEffect, useState } from 'react'
import Reveal, { SectionHead } from './Reveal.jsx'
import Icon from './Icons.jsx'
import { CONTACT } from '../data.js'
import { reviewsEnabled, fetchApprovedReviews, submitReview } from '../reviewsApi.js'

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const fmtDate = (d) => {
  try {
    return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
}

function Stars({ value, size = 16 }) {
  return (
    <div className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, k) => (
        <span key={k} className={k < value ? '' : 'star-off'}>
          <Icon name="star" size={size} />
        </span>
      ))}
    </div>
  )
}

function ReviewForm({ onSent }) {
  const empty = { name: '', role: '', company: '', rating: 5, text: '' }
  const [form, setForm] = useState(empty)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  function emailInstead() {
    const body = `Name: ${form.name}
Role / company: ${[form.role, form.company].filter(Boolean).join(', ')}
Rating: ${form.rating}/5

${form.text}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Review for SipSonic')}&body=${encodeURIComponent(body)}`
  }

  async function submit(e) {
    e.preventDefault()
    if (e.currentTarget.botcheck?.checked) return
    if (!reviewsEnabled) return emailInstead()
    setStatus('sending')
    try {
      await submitReview(form)
      setStatus('sent')
      setForm(empty)
      onSent?.()
    } catch {
      setStatus('error')
    }
  }

  const shown = hover || form.rating

  return (
    <form className="contact-form review-form" onSubmit={submit}>
      <div>
        <h3 className="review-form-title">Write a review</h3>
        <p className="review-form-sub">Worked with us? Tell others how it went.</p>
      </div>
      <div className="field">
        <span className="label">Your rating</span>
        <div className="star-picker" role="radiogroup" aria-label="Rating" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              role="radio"
              aria-checked={form.rating === n}
              aria-label={`${n} star${n > 1 ? 's' : ''}`}
              className={n <= shown ? 'on' : ''}
              onMouseEnter={() => setHover(n)}
              onClick={() => setForm({ ...form, rating: n })}
            >
              <Icon name="star" size={28} />
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="rv-name">Your name</label>
        <input id="rv-name" required maxLength={60} value={form.name} onChange={set('name')} placeholder="John Perera" />
      </div>
      <div className="review-form-row">
        <div className="field">
          <label htmlFor="rv-role">Role <small>(optional)</small></label>
          <input id="rv-role" maxLength={80} value={form.role} onChange={set('role')} placeholder="Founder" />
        </div>
        <div className="field">
          <label htmlFor="rv-company">Company <small>(optional)</small></label>
          <input id="rv-company" maxLength={80} value={form.company} onChange={set('company')} placeholder="Your company" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="rv-text">Your review</label>
        <textarea id="rv-text" rows={4} required minLength={10} maxLength={800} value={form.text} onChange={set('text')} placeholder="What did we build for you, and how was the experience?" />
      </div>
      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Submit review'} <Icon name="arrow" size={18} />
      </button>
      {status === 'sent' && (
        <p className="form-note ok" role="status">
          Thank you! Your review has been received and will appear here once it's checked.
        </p>
      )}
      {status === 'error' && (
        <p className="form-note err" role="alert">
          Sorry, your review couldn't be sent. <button type="button" onClick={emailInstead}>Send it by email instead</button>.
        </p>
      )}
    </form>
  )
}

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    if (!reviewsEnabled) return
    fetchApprovedReviews()
      .then(setReviews)
      .catch(() => {}) // no reviews shown if loading fails; the form still works
  }, [])

  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0

  return (
    <section id="customer-reviews" className="section customer-reviews">
      <div className="container">
        <SectionHead
          eyebrow="Customer reviews"
          title="Reviews from our"
          accent="customers"
          text="Real feedback from people who worked with SipSonic. Share yours below."
        />
        <div className={`cr-layout ${reviews.length ? '' : 'cr-solo'}`}>
          {reviews.length > 0 && (
            <div className="cr-list">
              <div className="cr-summary">
                <strong>{avg.toFixed(1)}</strong>
                <div>
                  <Stars value={Math.round(avg)} size={18} />
                  <small>
                    Based on {reviews.length} review{reviews.length > 1 ? 's' : ''}
                  </small>
                </div>
              </div>
              {reviews.map((r, i) => (
                <Reveal key={r.id} delay={Math.min(i, 4) * 0.06}>
                  <article className="cr-card">
                    <div className="cr-card-head">
                      <span className="reviewer-avatar">{initials(r.name) || '?'}</span>
                      <span className="cr-who">
                        <strong>{r.name}</strong>
                        {(r.role || r.company) && <small>{[r.role, r.company].filter(Boolean).join(', ')}</small>}
                      </span>
                      <time dateTime={r.createdAt}>{fmtDate(r.createdAt)}</time>
                    </div>
                    <Stars value={r.rating} />
                    <p>{r.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
          <Reveal delay={0.1} className="cr-form-wrap">
            <ReviewForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
