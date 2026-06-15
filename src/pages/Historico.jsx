import historico from '../mocks/historico'

function Historico() {
  return (
    <div>
      <h2>📋 Histórico de Leituras</h2>

      <p>
        Registro das últimas leituras dos sensores da horta.
      </p>

      <br />

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'white'
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
              Data
            </th>

            <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
              Canteiro
            </th>

            <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
              Temperatura
            </th>

            <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
              Umidade
            </th>

            <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
              Luminosidade
            </th>
          </tr>
        </thead>

        <tbody>
          {historico.map((registro) => (
            <tr key={registro.id}>
              <td style={{ padding: '12px' }}>
                {registro.data}
              </td>

              <td style={{ padding: '12px' }}>
                {registro.canteiro}
              </td>

              <td style={{ padding: '12px' }}>
                {registro.temperatura}°C
              </td>

              <td style={{ padding: '12px' }}>
                {registro.umidade}%
              </td>

              <td style={{ padding: '12px' }}>
                {registro.luminosidade} lux
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Historico