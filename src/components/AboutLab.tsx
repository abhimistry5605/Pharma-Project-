import {
  FlaskConical,
  ShieldCheck,
  Microscope,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from 'lucide-react'

export function AboutLab() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900">MediCore Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
            We partner with pharma and biotech teams to deliver traceable reference standards,
            validated analytical support, and world-class documentation that accelerates
            development timelines while maintaining the highest regulatory standards.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
              <p className="mt-3 text-slate-600">
                We partner with pharma and biotech teams to deliver traceable reference standards,
                validated analytical support, and world-class documentation that accelerates
                development timelines while maintaining the highest regulatory standards.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Infrastructure</h3>
              <p className="mt-3 text-slate-600">
                Advanced analytical capabilities for high-precision pharmaceutical R&D.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Advanced Analytical Infrastructure</h3>
              <p className="mt-3 text-slate-600">
                Our lab is built for high-throughput confirmation and trace-level impurity testing.
                We support rigorous regulatory submissions with fully documented methods.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border-l-4 border-cyan-600 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Microscope className="h-6 w-6 text-cyan-600" />
                    <h4 className="text-sm font-semibold text-slate-900">NMR Spectroscopy</h4>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    600 MHz systems for structural elucidation and identity confirmation.
                  </p>
                </div>
                <div className="rounded-2xl border-l-4 border-cyan-600 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="h-6 w-6 text-cyan-600" />
                    <h4 className="text-sm font-semibold text-slate-900">LC-MS/MS (Triple Quad)</h4>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Sensitive impurity profiling and metabolite mapping for regulatory packages.
                  </p>
                </div>
                <div className="rounded-2xl border-l-4 border-cyan-600 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-cyan-600" />
                    <h4 className="text-sm font-semibold text-slate-900">HPLC/UPLC (PDA/RI)</h4>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Purity & assay workflows with traceable method validation and COA generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-slate-900">Why MediCore?</h3>
          <p className="mt-2 text-slate-600">
            Our quality assurance process combines technical rigor with operational reliability.
          </p>

          <div className="mt-8 flex flex-col gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:flex-row sm:items-center">
            <div className="flex flex-1 items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <ChevronRight className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Synthesis</p>
                <p className="text-sm text-slate-600">Precision synthesis with controlled impurity profiles.</p>
              </div>
            </div>
            <div className="flex flex-1 items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <FlaskConical className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Purification</p>
                <p className="text-sm text-slate-600">Multi-stage purification with full traceability.</p>
              </div>
            </div>
            <div className="flex flex-1 items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Characterization (COA)</p>
                <p className="text-sm text-slate-600">Comprehensive COAs with validated analytical reports.</p>
              </div>
            </div>
            <div className="flex flex-1 items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Secure Logistics</p>
                <p className="text-sm text-slate-600">Temperature-controlled shipping with full tracking.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
            <p className="mt-2 text-sm text-slate-600">
              Reach our team with your request and we’ll route it to the right department.
            </p>

            <form className="mt-8 space-y-5">
              <label className="block text-sm font-medium text-slate-700">Department</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200">
                <option>Sales</option>
                <option>Technical</option>
                <option>Logistics</option>
              </select>

              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or what you need..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Global Headquarters</h3>
            <p className="mt-4 text-sm text-slate-600">
              4800 Discovery Drive
              <br />
              Innovation Park, CA 94016
              <br />
              United States
            </p>

            <div className="mt-8 rounded-2xl bg-slate-200 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-300">
                <MapPin className="h-8 w-8 text-slate-600" />
              </div>
              <p className="text-sm font-medium text-slate-700">Map Placeholder</p>
              <p className="mt-2 text-sm text-slate-500">Map view to be integrated with a mapping provider.</p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-cyan-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-cyan-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
              <p className="text-sm text-slate-600">sales@medicorepharma.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
