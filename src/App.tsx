import { useState } from 'react'
import { Flame, Sparkles, CheckCircle2, Rocket, Database, ShieldCheck } from 'lucide-react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="dashboard-card">
        <header className="card-header">
          <div className="brand-wrapper">
            <div className="icon-badge">
              <Flame size={28} />
            </div>
            <div>
              <h1 className="brand-title">GemlaVie</h1>
              <p className="brand-subtitle">React + Vite + TypeScript (CSS Pur)</p>
            </div>
          </div>
          <span className="status-badge">
            <CheckCircle2 size={14} />
            Firebase Connecté
          </span>
        </header>

        <section>
          <h2 className="section-title">Stack technique prête :</h2>
          <div className="features-grid">
            <div className="feature-item">
              <Rocket size={20} color="#818cf8" />
              <div>
                <p className="feature-title">Vite & React 19</p>
                <p className="feature-desc">Fast HMR & TypeScript</p>
              </div>
            </div>
            <div className="feature-item">
              <Sparkles size={20} color="#38bdf8" />
              <div>
                <p className="feature-title">CSS Pur</p>
                <p className="feature-desc">Styles personnalisés natifs</p>
              </div>
            </div>
            <div className="feature-item">
              <Database size={20} color="#fbbf24" />
              <div>
                <p className="feature-title">Projet Firebase</p>
                <p className="feature-desc">react-gemlavie-site</p>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck size={20} color="#34d399" />
              <div>
                <p className="feature-title">SDK Initialisé</p>
                <p className="feature-desc">src/firebase.ts</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="action-bar">
          <p className="action-text">
            Modifiez <code>src/App.tsx</code> et <code>src/App.css</code> pour personnaliser votre site.
          </p>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="btn-counter"
          >
            Clics : {count}
          </button>
        </footer>
      </div>
    </div>
  )
}
