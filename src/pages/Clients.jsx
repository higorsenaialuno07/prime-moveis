import { Link } from 'react-router-dom'

function Clients() {
  return (

    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <h1>
              Clientes
            </h1>

            <p>
              Lista de clientes cadastrados
            </p>

          </div>

        </header>

        <section className="dashboard-table">

          <div className="table-header">

            <h2>
              Clientes Recentes
            </h2>

          </div>

          <table>

            <thead>

              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  Lucas Silva
                </td>

                <td>
                  lucas@gmail.com
                </td>

                <td>

                  <span className="status delivered">
                    Ativo
                  </span>

                </td>

              </tr>

              <tr>

                <td>
                  Maria Souza
                </td>

                <td>
                  maria@gmail.com
                </td>

                <td>

                  <span className="status pending">
                    Pendente
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

export default Clients