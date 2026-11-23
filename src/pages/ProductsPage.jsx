import PageHero from '../components/PageHero.jsx'
import Products from '../components/Products.jsx'
import Stats from '../components/Stats.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Products' }]}
        eyebrow="Our best work"
        title="Products our customers"
        accent="love"
        text="Real software we have built and delivered for businesses. Open any project to watch the full demo and see what it does."
      />
      <Products showHead={false} />
      <Stats />
      <CtaBand title="Want something like this for your business?" />
    </>
  )
}
