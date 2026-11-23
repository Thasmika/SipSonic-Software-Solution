import PageHero from '../components/PageHero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Stats from '../components/Stats.jsx'
import CustomerReviews from '../components/CustomerReviews.jsx'

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Reviews' }]}
        eyebrow="Client reviews"
        title="What our clients"
        accent="say"
        text="Businesses that trusted us with their software, in their own words."
      >
        <a href="#customer-reviews" className="btn btn-primary">
          Write a review
        </a>
      </PageHero>
      <Testimonials showHead={false} />
      <CustomerReviews />
      <Stats />
    </>
  )
}
