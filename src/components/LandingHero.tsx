import { Search, TestTube2, Atom, FlaskConical, CheckCircle2, Globe2, Award } from 'lucide-react'
import { useMemo, useState } from 'react'

const categoryCards = [
  {
    title: 'NMR Spectroscopy',
    description:
      '600 MHz systems for structural elucidation and identity confirmation.',
    icon: TestTube2,
  },
  {
    title: 'LC-MS/MS',
    description:
      'Sensitive impurity profiling and metabolite mapping for regulatory packages.',
    icon: Atom,
  },
  {
    title: 'HPLC/UPLC',
    description:
      'Purity & assay workflows with traceable method validation and COA generation.',
    icon: FlaskConical,
  },
]

const trustBadges = [
  {
    label: 'ISO Certified',
    icon: CheckCircle2,
  },
  {
    label: 'Global Shipping',
    icon: Globe2,
  },
  {
    label: 'HPLC/NMR Verified',
    icon: Award,
  },
]

export function LandingHero() {
  const [query, setQuery] = useState('')

  const heroImageUrl = useMemo(
    () =>
      'https://images.unsplash.com/photo-1606853737672-67eccc0a9575?auto=format&fit=crop&w=1600&q=80', // 600MHz NMR system sterile lab
    []
  )

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="max-w-xl">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                Your Strategic Partner in Pharmaceutical Excellence.
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                MediCore delivers quality, transparency, and global health impact through trusted
                analytical services, certified reference standards, and accelerated supply chains.
              </p>
            </div>

            <div className="relative max-w-2xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
placeholder="Search by Name, CAS, or Cat No."
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 shadow-2xl shadow-slate-200/50 placeholder:text-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              />
              {query && (
                <p className="mt-2 text-sm text-slate-500">
                  Showing results for <span className="font-medium text-slate-700">"{query}"</span>.
                </p>
              )}
            </div>

            <div className="flex gap-6">
              <button className="flex-1 rounded-xl bg-cyan-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-cyan-700 transition-all" onClick={() => document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})}>
                Browse Catalog
              </button>
              <button className="flex-1 rounded-xl border-2 border-slate-600 px-6 py-4 text-lg font-semibold text-slate-900 hover:bg-slate-50 transition-all" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                Our Services
              </button>
            </div>

            <div className="mt-12 rounded-2xl border-t border-slate-200 bg-slate-50 px-6 py-8">
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div key={badge.label} className="flex flex-col items-center gap-3">
                      <Icon className="h-6 w-6 text-slate-500" />
                      <span className="text-sm font-medium text-slate-700">{badge.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {categoryCards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-cyan-600">
                      <Icon className="h-5 w-5" />
                      <h5 className="text-sm font-semibold text-slate-900">{card.title}</h5>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

<div className="relative h-80 flex items-center justify-center rounded-3xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-2xl sm:h-[520px] border-4 border-white p-8">
            <img
              src={heroImageUrl}
              alt="Pharmaceutical laboratory research with instruments and digital dashboard"
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
