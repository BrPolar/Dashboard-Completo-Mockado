import canteiros from '../mocks/canteiros'

function Dashboard() {
  const mediaTemperatura =
    canteiros.reduce((total, c) => total + c.temperatura, 0) /
    canteiros.length

  const mediaUmidade =
    canteiros.reduce((total, c) => total + c.umidade, 0) /
    canteiros.length

  const mediaLuminosidade =
    canteiros.reduce((total, c) => total + c.luminosidade, 0) /
    canteiros.length

  const totalCanteiros = canteiros.length

  const totalAlertas = canteiros.filter(
    (c) => c.umidade < 30
  ).length

  const canteirosSaudaveis = canteiros.filter(
    (c) => c.status === 'Saudavel'
  ).length

  const irrigacoesSemana = 18

  const mediaGeralUmidade =
    canteiros.reduce(
      (total, c) => total + c.umidade,
      0
    ) / canteiros.length

  return (
    <div>
      <h2>🌱 Dashboard Principal</h2>

      <p>
        Monitoramento em tempo real da horta inteligente.
      </p>

      <br />

      {/* Indicadores principais */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>🌡 Temperatura Média</h3>
          <h2>{mediaTemperatura.toFixed(1)}°C</h2>
        </div>

        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>💧 Umidade Média</h3>
          <h2>{mediaUmidade.toFixed(1)}%</h2>
        </div>

        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>☀ Luminosidade Média</h3>
          <h2>{mediaLuminosidade.toFixed(0)} lux</h2>
        </div>
      </div>

      {/* Resumo operacional */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}
      >
        <div
          style={{
            background: '#d4edda',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px'
          }}
        >
          <h3>🌱 Total de Canteiros</h3>
          <h2>{totalCanteiros}</h2>
        </div>

        <div
          style={{
            background: '#f8d7da',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px'
          }}
        >
          <h3>🚨 Alertas Ativos</h3>
          <h2>{totalAlertas}</h2>
        </div>

        <div
          style={{
            background: '#d1ecf1',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px'
          }}
        >
          <h3>✅ Canteiros Saudáveis</h3>
          <h2>{canteirosSaudaveis}</h2>
        </div>
      </div>

      {/* Relatório agregado */}
      <h3>📊 Relatório Semanal</h3>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}
      >
        <div
          style={{
            background: '#fff3cd',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px'
          }}
        >
          <h3>💧 Irrigações</h3>
          <h2>{irrigacoesSemana}</h2>
          <p>Últimos 7 dias</p>
        </div>

        <div
          style={{
            background: '#e2e3ff',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '220px'
          }}
        >
          <h3>📈 Média Geral de Umidade</h3>
          <h2>{mediaGeralUmidade.toFixed(1)}%</h2>
          <p>Todos os canteiros</p>
        </div>
      </div>

      <h3>Status dos Canteiros</h3>

      <br />

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
          <h3>{canteiro.nome}</h3>

          <p>
            <strong>Status:</strong> {canteiro.status}
          </p>

          <p>
            <strong>Temperatura:</strong> {canteiro.temperatura}°C
          </p>

          <p>
            <strong>Umidade:</strong> {canteiro.umidade}%
          </p>

          <p>
            <strong>Luminosidade:</strong> {canteiro.luminosidade} lux
          </p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard