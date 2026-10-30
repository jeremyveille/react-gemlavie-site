import { useState } from 'react'
import { Flame, Sparkles, CheckCircle2, Rocket, Database, ShieldCheck } from 'lucide-react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Flame className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">GemlaVie</h1>
              <p className="text-sm text-slate-400">React + Vite + TypeScript + Tailwind CSS</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Firebase Connecté
          </span>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold text-slate-200">Stack technique prête :</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center gap-3">
              <Rocket className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-sm font-medium text-white">Vite & React 19</p>
                <p className="text-xs text-slate-400">Fast HMR & TypeScript</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">Tailwind CSS v4</p>
                <p className="text-xs text-slate-400">Styles utilitaires modernes</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center gap-3">
              <Database className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-sm font-medium text-white">Projet Firebase</p>
                <p className="text-xs text-slate-400">react-gemlavie-site</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm font-medium text-white">SDK Initialisé</p>
                <p className="text-xs text-slate-400">src/firebase.ts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-800">
          <p className="text-sm text-slate-300">
            Modifiez <code className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 text-xs font-mono">src/App.tsx</code> pour commencer à créer votre site.
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition shadow-lg shadow-orange-600/20 cursor-pointer active:scale-95"
          >
            Clics : {count}
          </button>
        </div>
      </div>
    </div>
  )
}
