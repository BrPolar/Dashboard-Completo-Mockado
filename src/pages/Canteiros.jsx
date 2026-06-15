import { useState } from 'react'
import dadosIniciais from '../mocks/canteiros'

function Canteiros() {
  const [canteiros, setCanteiros] = useState(dadosIniciais)
  const [editandoId, setEditandoId] = useState(null)
  const [novoNome, setNovoNome] = useState('')
  const [erro, setErro] = useState('')

  const adicionarCanteiro = () => {
    const novo = {
      id: Date.now(),
      nome: `Novo Canteiro`,
      temperatura: 25,
      umidade: 60,
      luminosidade: 1000,
      status: 'Saudavel'
    }

    setCanteiros([...canteiros, novo])
  }

  const removerCanteiro = (id) => {
    setCanteiros(
      canteiros.filter((c) => c.id !== id)
    )
  }

  const iniciarEdicao = (canteiro) => {
    setEditandoId(canteiro.id)
    setNovoNome(canteiro.nome)
    setErro('')
  }

  const salvarEdicao = (id) => {
    if (novoNome.trim().length < 3) {
      setErro('O nome deve possuir pelo menos 3 caracteres.')
      return
    }

    setCanteiros(
      canteiros.map((c) =>
        c.id === id
          ? { ...c, nome: novoNome.trim() }
          : c
      )
    )

    setEditandoId(null)
    setNovoNome('')
    setErro('')
  }

  return (
    <div>
      <h2>🌱 Gerenciamento de Canteiros</h2>

      <p>
        Cadastro e gerenciamento dos canteiros da horta.
      </p>

      <br />

      <button
        onClick={adicionarCanteiro}
        style={{
          padding: '10px 15px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          background: '#2e7d32',
          color: 'white'
        }}
      >
        + Novo Canteiro
      </button>

      <br />
      <br />

      {erro && (
        <div
          style={{
            background: '#f8d7da',
            color: '#721c24',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '15px'
          }}
        >
          {erro}
        </div>
      )}

      {canteiros.map((canteiro) => (
        <div
          key={canteiro.id}
          style={{
            background: 'white',
            padding: '20px',
            marginBottom: '15px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {editandoId === canteiro.id ? (
            <>
              <input
                type="text"
                value={novoNome}
                onChange={(e) =>
                  setNovoNome(e.target.value)
                }
                style={{
                  padding: '8px',
                  width: '250px',
                  marginBottom: '10px'
                }}
              />

              <br />

              <button
                onClick={() =>
                  salvarEdicao(canteiro.id)
                }
                style={{
                  background: '#198754',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Salvar
              </button>
            </>
          ) : (
            <>
              <h3>{canteiro.nome}</h3>

              <p>Status: {canteiro.status}</p>

              <p>
                Temperatura: {canteiro.temperatura}°C
              </p>

              <p>
                Umidade: {canteiro.umidade}%
              </p>

              <p>
                Luminosidade: {canteiro.luminosidade} lux
              </p>

              <button
                onClick={() =>
                  iniciarEdicao(canteiro)
                }
                style={{
                  background: '#0d6efd',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Editar
              </button>

              <button
                onClick={() =>
                  removerCanteiro(canteiro.id)
                }
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Remover
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Canteiros