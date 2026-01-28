import { useState } from 'react'
import {
  ArrowRight,
  ChevronRight,
  Command,
  Database,
  ShieldCheck,
  Zap,
} from 'lucide-react'

/**
 * Notara Landing Page - Senior Product Designer Approach
 * Philosophy: Monastic, High-Density, Functional.
 */
const App = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A18] font-sans selection:bg-indigo-100">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/60 bg-[#FBFBFA]/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-black" />
            <span className="text-sm font-bold uppercase tracking-widest">Notara</span>
          </div>
          <div className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400 md:flex">
            <a href="#" className="transition-colors hover:text-black">
              Manifesto
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Infrastructure
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Docs
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-lg px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-slate-100">
            Login
          </button>
          <button className="rounded-lg bg-black px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:shadow-lg">
            Join Waitlist
          </button>
        </div>
      </nav>

      <main>
        <section className="flex flex-col border-b border-slate-200 lg:flex-row">
          <div className="flex w-full flex-col justify-center border-r border-slate-200 p-8 lg:w-1/2 lg:p-20">
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded border border-indigo-100 bg-indigo-50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-600">
              <Zap size={12} /> Edge-Computed Indexing
            </div>
            <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tight lg:text-7xl">
              Stateful <br /> Knowledge <br /> Archives.
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-slate-500">
              Notara is a monastic workspace for high-stakes research. We do not just
              chat with your PDFs; we index them into a persistent, stateful library
              running on the edge.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="university@email.edu"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition-all focus:ring-4 focus:ring-black/5"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 font-bold text-white transition-all hover:bg-slate-800">
                Request Access{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-tighter text-slate-400">
              Priority access for .edu addresses. Secure infrastructure. No data
              harvesting.
            </p>
          </div>

          <div className="flex w-full items-center justify-center overflow-hidden bg-slate-100/50 p-4 lg:w-1/2 lg:p-12">
            <div className="flex h-[500px] w-full max-w-2xl translate-x-4 rotate-1 scale-105 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="flex h-10 items-center justify-between border-b bg-slate-50 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Physics_Thesis_Final.pdf
                </div>
                <div className="w-6" />
              </div>
              <div className="flex flex-1">
                <div className="flex w-12 flex-col items-center gap-4 border-r py-4">
                  <div className="h-6 w-6 rounded bg-indigo-600" />
                  <div className="h-6 w-6 rounded bg-slate-100" />
                  <div className="h-6 w-6 rounded bg-slate-100" />
                </div>
                <div className="space-y-4 p-8">
                  <div className="h-4 w-3/4 rounded bg-slate-100" />
                  <div className="h-4 w-1/2 rounded bg-slate-100" />
                  <div className="h-4 w-full rounded bg-slate-100" />
                  <div className="flex h-32 w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-300">
                    LATEX PREVIEW RENDER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 border-b border-slate-200 md:grid-cols-3">
          <div className="border-b border-slate-200 p-12 md:border-b-0 md:border-r">
            <Database className="mb-6 text-indigo-600" size={24} />
            <h3 className="mb-2 text-lg font-bold">Immutable Storage</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Every PDF is versioned and indexed using vector embeddings. Your
              knowledge does not decay; it compounds.
            </p>
          </div>
          <div className="border-b border-slate-200 p-12 md:border-b-0 md:border-r">
            <Command className="mb-6 text-indigo-600" size={24} />
            <h3 className="mb-2 text-lg font-bold">Keyboard Native</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Designed for speed. Index, search, and cite using advanced command
              palettes. Forget the mouse.
            </p>
          </div>
          <div className="p-12">
            <ShieldCheck className="mb-6 text-indigo-600" size={24} />
            <h3 className="mb-2 text-lg font-bold">Edge-First Privacy</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Your data stays in your region. We utilize Cloudflare Workers to
              ensure latency and privacy are never compromised.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl p-12 text-center lg:p-24">
          <h2 className="mb-8 text-3xl font-bold">We refuse to build a toy.</h2>
          <p className="text-xl font-medium italic leading-relaxed text-slate-500">
            &quot;Software for thought has become too colorful, too distracting, and
            too ephemeral. Notara is the return to the permanence of ink, powered
            by the velocity of the edge.&quot;
          </p>
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 border-b-2 border-black pb-1 text-xs font-black uppercase tracking-widest">
              Read our technical manifesto <ChevronRight size={16} />
            </button>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 p-8 md:flex-row">
        <div className="flex items-center gap-2 opacity-50">
          <div className="h-4 w-4 rounded-sm bg-black" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Notara © 2026
          </span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-black">
            Privacy
          </a>
          <a href="#" className="hover:text-black">
            Terms
          </a>
          <a href="#" className="hover:text-black">
            Twitter
          </a>
          <a href="#" className="hover:text-black">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
