import { Menu, Search } from 'lucide-react'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">MediCore</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">Products</a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">Contact</a>
            <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 transition-all">
              Get Quote
            </button>
          </div>

          <button className="md:hidden p-2 -mr-1 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

