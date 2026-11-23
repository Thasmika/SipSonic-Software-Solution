import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { CONTACT } from '../data.js'
import { CURRENT_PAGE } from '../links.js'

// General-purpose wording for a small software company. Review it (ideally with a lawyer) before relying on it.
const UPDATED = '23 November 2026'

const PRIVACY = [
  ['Who we are', `SipSonic Software Solutions ("SipSonic", "we", "us") is a software development company based in Sri Lanka. This policy explains how we handle personal information collected through this website.`],
  ['What we collect', 'When you use our contact form, call, email or message us on WhatsApp, we receive the details you choose to share, such as your name, email address, phone number, company and project details. We do not ask for sensitive personal information.'],
  ['How we use it', 'We use your information only to reply to your enquiry, prepare quotes, deliver and support the services you request, and keep records of our communication. We do not sell or rent your personal information to anyone.'],
  ['Confidentiality', 'Project ideas, business information and any customer data you share with us are treated as strictly confidential. We are happy to sign a non-disclosure agreement (NDA) before you share details, and we only give access to the people working on your project.'],
  ['Services we use', 'Contact form messages are delivered to our inbox through a third-party form service, and WhatsApp messages are handled by WhatsApp. These providers process data under their own privacy policies. This website is hosted on GitHub Pages, which may log basic technical data such as IP addresses for security.'],
  ['How long we keep it', 'We keep enquiry and project communication for as long as needed to serve you and meet legal or accounting requirements, then delete it.'],
  ['Your rights', 'You can ask us at any time to see, correct or delete the personal information we hold about you. Just contact us using the details below.'],
  ['Cookies', 'This website does not use advertising or tracking cookies. If we add analytics in future, we will update this policy.'],
  ['Changes', 'We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.'],
]

const TERMS = [
  ['About these terms', 'These terms apply to your use of the SipSonic Software Solutions website. By using the site, you agree to them. Project work is covered by a separate written quote or agreement, which takes priority over these terms.'],
  ['Website content', 'The content on this website is for general information about our services. We work to keep it accurate and up to date, but it may change without notice and is not a binding offer.'],
  ['Quotes and projects', 'Prices, timelines and scope for any project are confirmed in a written quote. Work begins once the quote is accepted and any agreed deposit is paid. Payments follow the milestones set out in the quote.'],
  ['Ownership', 'Unless agreed otherwise in writing, once a project is paid in full, the client owns the delivered source code, designs and project data. We may reuse general know-how, tools and components that are not specific to your project.'],
  ['Portfolio', 'We may show completed work, such as screenshots, demo videos and a short description, in our portfolio, unless you ask us not to or the project is covered by a confidentiality agreement.'],
  ['Intellectual property', 'The SipSonic name, logo, website design and content belong to SipSonic Software Solutions and may not be copied without permission.'],
  ['Limitation of liability', 'We provide this website "as is". To the extent allowed by law, SipSonic is not liable for any indirect loss arising from use of this website. Our responsibilities for project work are set out in the project agreement.'],
  ['Governing law', 'These terms are governed by the laws of Sri Lanka.'],
]

export default function LegalPage() {
  const isPrivacy = CURRENT_PAGE === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service'
  const sections = isPrivacy ? PRIVACY : TERMS

  return (
    <>
      <PageHero crumbs={[{ label: title }]} eyebrow="Legal" title={title} text={`Last updated: ${UPDATED}`} />
      <section className="section legal">
        <div className="container">
          <Reveal className="legal-body">
            {sections.map(([h, body], i) => (
              <div key={h}>
                <h2>
                  {i + 1}. {h}
                </h2>
                <p>{body}</p>
              </div>
            ))}
            <div>
              <h2>{sections.length + 1}. Contact</h2>
              <p>
                Questions about this {isPrivacy ? 'policy' : 'page'}? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{' '}
                <a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
