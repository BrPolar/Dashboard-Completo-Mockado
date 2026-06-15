import canteiros from '../mocks/canteiros'

function Alertas() {
  const alertas = canteiros.filter(
    (canteiro) => canteiro.umidade < 30
  )

  return (
    <div>
      <h2>Alertas do Sistema</h2>

      <p>Monitoramento automatico de eventos criticos.</p>

      <br />

      {alertas.length === 0 ? (
        <p>Nenhum alerta encontrado.</p>
      ) : (
        alertas.map((canteiro) => (
          <div
            key={canteiro.id}
            style={{
              background: '#fff3cd',
              border: '1px solid #ffe69c',
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '10px'
            }}
          >
            <strong>Alerta de Umidade Baixa</strong>

            <p>Canteiro: {canteiro.nome}</p>

            <p>Umidade atual: {canteiro.umidade}%</p>

            <p>Status: Acao recomendada</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Alertas