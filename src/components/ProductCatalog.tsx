import { useMemo, useState } from 'react'
import { Search, CheckCircle2 } from 'lucide-react'

type Product = {
  id: string
  name: string
  casNo: string
  catNo: string
  category: string
  inStock: boolean
  imageUrl: string
}

const products: Product[] = [
  {
    id: 'p1',
    name: 'Abacavir Sulfate',
    casNo: '188062-50-2',
    catNo: 'MC-ABC-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1580910051073-2a49f63a37f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p2',
    name: 'Descyclopropyl Abacavir',
    casNo: '124752-25-6',
    catNo: 'LL-ABC-02',
    category: 'Impurity',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p3',
    name: 'Acyclovir Impurity A',
    casNo: '59277-89-3',
    catNo: 'LL-ACY-09',
    category: 'Impurity',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1523906630133-f6934a84a52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p4',
    name: 'Adapalene',
    casNo: '106685-40-9',
    catNo: 'LL-ADA-01',
    category: 'API',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p5',
    name: 'Agomelatine',
    casNo: '138112-76-2',
    catNo: 'LL-AGO-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1581091870620-4a1ad52adf71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p6',
    name: 'Albendazole Sulfoxide',
    casNo: '54029-12-8',
    catNo: 'LL-ALB-05',
    category: 'Metabolite',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1562184550-7c34a75c5a4d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p7',
    name: 'Ambroxol Hydrochloride',
    casNo: '23828-92-4',
    catNo: 'LL-AMB-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p8',
    name: 'N-Nitroso Apixaban',
    casNo: 'NA',
    catNo: 'LL-APX-N1',
    category: 'Nitrosamine',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1581091012184-527ffd3cd3b0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p9',
    name: 'Atorvastatin Calcium',
    casNo: '134523-03-8',
    catNo: 'LL-ATR-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p10',
    name: 'Clopidogrel Bisulfate',
    casNo: '120202-66-6',
    catNo: 'LL-CLP-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1573164574396-2b0f63b15520?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p11',
    name: '2-Oxo Clopidogrel',
    casNo: '109904-27-0',
    catNo: 'LL-CLP-04',
    category: 'Metabolite',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p12',
    name: 'Dabigatran Etexilate',
    casNo: '211915-06-9',
    catNo: 'LL-DAB-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1521790797524-b2497295b8d2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p13',
    name: 'Enalapril Impurity A',
    casNo: '115729-52-7',
    catNo: 'LL-ENA-03',
    category: 'Impurity',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1581091870620-4a1ad52adf71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p14',
    name: 'Formaldehyde Standard',
    casNo: '50-00-0',
    catNo: 'LL-FOR-10',
    category: 'Reference Standard',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1554427417-6b9f5d8a949d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p15',
    name: 'Lansoprazole Sulfone',
    casNo: '131926-99-3',
    catNo: 'LL-LAN-02',
    category: 'Impurity',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p16',
    name: 'Metformin Hydrochloride',
    casNo: '1115-70-4',
    catNo: 'LL-MET-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p17',
    name: 'Moxifloxacin Impurity A',
    casNo: '110373-85-8',
    catNo: 'LL-MOX-05',
    category: 'Impurity',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1523906630133-f6934a84a52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p18',
    name: 'Olanzapine N-Oxide',
    casNo: '174794-02-6',
    catNo: 'LL-OLZ-02',
    category: 'Impurity',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1573164574396-2b0f63b15520?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p19',
    name: 'Ritonavir',
    casNo: '155213-67-5',
    catNo: 'LL-RIT-01',
    category: 'API',
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p20',
    name: 'Sitagliptin Phosphate',
    casNo: '654671-77-9',
    catNo: 'LL-SIT-01',
    category: 'API',
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1521790797524-b2497295b8d2?auto=format&fit=crop&w=600&q=80',
  },
]

const categoryOptions = ['API', 'Impurity', 'Metabolite', 'Nitrosamine']

type ProductCatalogProps = {
  showCount?: number
  featured?: boolean
}

export function ProductCatalog({ showCount, featured }: ProductCatalogProps = {}) {
  const [query, setQuery] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'stock'>('relevance')
  const [showAll, setShowAll] = useState(false)

  const clearFilters = () => {
    setQuery('')
    setInStockOnly(false)
    setSelectedCategories([])
    setSortBy('relevance')
  }

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesStock = !inStockOnly || product.inStock
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesSearch =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.casNo.toLowerCase().includes(term) ||
        product.catNo.toLowerCase().includes(term)

      return matchesStock && matchesCategory && matchesSearch
    })
  }, [inStockOnly, query, selectedCategories])

  const visibleProducts = useMemo(() => {
    let list = filteredProducts
    if (featured) {
      list = list.filter((product) => product.category === 'API')
    }

    if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'stock') {
      list = [...list].sort((a, b) => Number(b.inStock) - Number(a.inStock))
    }

    if (showAll) {
      return list
    }

    if (showCount && showCount > 0) {
      return list.slice(0, showCount)
    }

    return list.slice(0, 4)
  }, [filteredProducts, featured, showAll, sortBy, showCount])

  const totalProducts = featured ? products.filter((p) => p.category === 'API').length : products.length


  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((value) => value !== category)
        : [...prev, category]
    )
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Filter Products</h2>

          <div className="mt-8 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Search className="h-4 w-4 text-slate-500" />
                Refinement Search
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Cat No, CAS, or Name..."
                className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-600/10 text-cyan-600">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900">In Stock Only</p>
                  <p className="text-xs text-slate-500">Hide out-of-stock entries</p>
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-cyan-600" />
                <div className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow ring-0 transition-all peer-checked:translate-x-5" />
              </label>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700">Categories</p>
              <div className="mt-4 space-y-3">
                {categoryOptions.map((category) => {
                  const checked = selectedCategories.includes(category)
                  return (
                    <label
                      key={category}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-cyan-600"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 accent-cyan-600"
                      />
                      <span className="text-slate-700">{category}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {showAll && (
            <div className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 py-4 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="flex flex-1 items-center gap-3">
                  <Search className="h-5 w-5 text-slate-500" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by Cat No, CAS, or Name..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowAll(false)}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Collapse Preview
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Product Catalog</h2>
              <p className="mt-1 text-sm text-slate-600">
                Browse quality reference standards and select the materials you need.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <label className="text-sm text-slate-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'relevance' | 'name' | 'stock')}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                <option value="relevance">Relevance</option>
                <option value="name">Name (A-Z)</option>
                <option value="stock">In Stock First</option>
              </select>
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200"
              >
                Clear filters
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Showing <span className="font-semibold text-slate-900">{visibleProducts.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{totalProducts}</span> products
          </p>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
                <p className="text-sm font-medium text-slate-700">No products match your filters.</p>
                <p className="mt-2 text-sm text-slate-500">Try adjusting search terms or category selections.</p>
              </div>
            ) : (
              visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="grid w-full grid-cols-1 gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                    <img src={product.imageUrl} alt={product.name} className="h-10 w-10 object-contain" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">{product.name}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="max-w-[180px] truncate rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">Cat No {product.catNo}</span>
                      <span className="max-w-[180px] truncate rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">CAS {product.casNo}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">{product.category}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold ${
                          product.inStock
                            ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                            : 'border-amber-100 bg-amber-50 text-amber-700'
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-current" />
                        {product.inStock ? 'In stock' : 'Out of stock'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-2 sm:pt-0">
                    <button
                      type="button"
                      disabled={!product.inStock}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        product.inStock
                          ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                          : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'View Details' : 'Out of stock'}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          {!showAll && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-cyan-700"
              >
                View All 20+ Reference Standards
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  )
}
