import PageHero from '../components/PageHero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Stats from '../components/Stats.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Reviews' }]}
        eyebrow="Client reviews"
        title="What our clients"
        accent="say"
        text="Businesses that trusted us with their software, in their own words."
      />
      <Testimonials showHead={false} />
      <Stats />
      <CtaBand title="Ready to be our next success story?" />
    </>
  )
}
