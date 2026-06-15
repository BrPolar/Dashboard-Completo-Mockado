import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Alertas from './pages/Alertas'
import Historico from './pages/Historico'
import Canteiros from './pages/Canteiros'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/canteiros" element={<Canteiros />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App