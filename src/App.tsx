import { AboutLab } from './components/AboutLab'
import { LandingHero } from './components/LandingHero'
import { Nav } from './components/Nav'
import { ProductCatalog } from './components/ProductCatalog'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <Nav />
      <LandingHero />
      <section id="catalog">
        <ProductCatalog />
      </section>
      <section id="about">
        <AboutLab />
      </section>
    </div>
  )
}
