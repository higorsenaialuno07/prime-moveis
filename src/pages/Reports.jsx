import { Link } from 'react-router-dom'

function Reports() {
  return (

    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <h1>
              Relatórios
            </h1>

            <p>
              Análise geral do sistema
            </p>

          </div>

        </header>

        <section className="stats-grid">

          <div className="stat-card">

            <span>
              Vendas Totais
            </span>

            <h2>
              R$ 45.900
            </h2>

            <p>
              +18% este mês
            </p>

          </div>

          <div className="stat-card">

            <span>
              Pedidos
            </span>

            <h2>
              320
            </h2>

            <p>
              12 hoje
            </p>

          </div>

          <div className="stat-card">

            <span>
              Clientes
            </span>

            <h2>
              210
            </h2>

            <p>
              +25 novos
            </p>

          </div>

          <div className="stat-card">

            <span>
              Produtos Vendidos
            </span>

            <h2>
              580
            </h2>

            <p>
              Alta demanda
            </p>

          </div>

        </section>

        <section className="dashboard-table">

          <div className="table-header">

            <h2>
              Relatório Mensal
            </h2>

          </div>

          <table>

            <thead>

              <tr>
                <th>Mês</th>
                <th>Vendas</th>
                <th>Pedidos</th>
                <th>Crescimento</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  Janeiro
                </td>

                <td>
                  R$ 12.500
                </td>

                <td>
                  85
                </td>

                <td>

                  <span className="status delivered">
                    +12%
                  </span>

                </td>

              </tr>

              <tr>

                <td>
                  Fevereiro
                </td>

                <td>
                  R$ 15.900
                </td>

                <td>
                  110
                </td>

                <td>

                  <span className="status delivered">
                    +20%
                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>

  )
}

export default Reports