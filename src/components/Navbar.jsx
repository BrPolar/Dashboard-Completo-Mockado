import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🌱 Horta Inteligente</h1>

      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/alertas">Alertas</Link>
        <Link to="/historico">Historico</Link>
        <Link to="/canteiros">Canteiros</Link>
      </div>
    </nav>
  )
}

export default Navbar
