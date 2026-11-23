// Customer reviews stored in Firebase Cloud Firestore, via its REST API (no SDK needed).
// New reviews are saved with approved: false. They appear on the site only after you open the
// Firebase console > Firestore > reviews, and change that review's "approved" field to true.
import { FIREBASE } from './data.js'

export const reviewsEnabled = Boolean(FIREBASE.apiKey && FIREBASE.projectId)

const base = () => `https://firestore.googleapis.com/v1/projects/${FIREBASE.projectId}/databases/(default)/documents`

const str = (v) => ({ stringValue: v })

function fromDoc(doc) {
  const f = doc.fields || {}
  return {
    id: doc.name.split('/').pop(),
    name: f.name?.stringValue || 'Customer',
    role: f.role?.stringValue || '',
    company: f.company?.stringValue || '',
    text: f.text?.stringValue || '',
    rating: Number(f.rating?.integerValue || 5),
    createdAt: f.createdAt?.timestampValue || doc.createTime,
  }
}

export async function fetchApprovedReviews() {
  const res = await fetch(`${base()}:runQuery?key=${FIREBASE.apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: 'reviews' }],
        where: { fieldFilter: { field: { fieldPath: 'approved' }, op: 'EQUAL', value: { booleanValue: true } } },
        limit: 200,
      },
    }),
  })
  if (!res.ok) throw new Error(`Could not load reviews (${res.status})`)
  const rows = await res.json()
  return rows
    .filter((r) => r.document)
    .map((r) => fromDoc(r.document))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export async function submitReview({ name, role, company, rating, text }) {
  const res = await fetch(`${base()}/reviews?key=${FIREBASE.apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        name: str(name.trim()),
        role: str(role.trim()),
        company: str(company.trim()),
        text: str(text.trim()),
        rating: { integerValue: String(rating) },
        approved: { booleanValue: false },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  })
  if (!res.ok) throw new Error(`Could not send review (${res.status})`)
}
