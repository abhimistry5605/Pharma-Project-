import { ProductCatalog } from './ProductCatalog'

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Products</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Discover our premium chemical standards</p>
        </div>
        <ProductCatalog showCount={4} featured={true} />
        <div className="text-center mt-16">
          <button 
            className="bg-cyan-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-cyan-700 transition-all inline-block"
            onClick={() => document.getElementById('portal')?.scrollIntoView({behavior: 'smooth'})}
          >
            View Full Catalog & Search by Cat No.
          </button>
        </div>
      </div>
    </section>
  )
}

