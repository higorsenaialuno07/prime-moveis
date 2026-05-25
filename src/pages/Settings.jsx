import { Link } from 'react-router-dom'

function Settings() {
  return (

    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <h1>
              Configurações
            </h1>

            <p>
              Gerencie as configurações do sistema
            </p>

          </div>

        </header>

        <section className="settings-grid">

          <div className="stat-card">

            <span>
              Nome da Loja
            </span>

            <h2>
              Prime Móveis
            </h2>

            <p>
              Sistema ativo
            </p>

          </div>

          <div className="stat-card">

            <span>
              Email
            </span>

            <h2>
              suporte@primemoveis.com
            </h2>

            <p>
              Email principal
            </p>

          </div>

          <div className="stat-card">

            <span>
              Status
            </span>

            <h2>
              Online
            </h2>

            <p>
              Funcionando normalmente
            </p>

          </div>

        </section>

        <section className="dashboard-table">

          <div className="table-header">

            <h2>
              Preferências
            </h2>

          </div>

          <table>

            <thead>

              <tr>
                <th>Configuração</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  Notificações
                </td>

                <td>

                  <span className="status delivered">
                    Ativado
                  </span>

                </td>

              </tr>

              <tr>

                <td>
                  Tema Escuro
                </td>

                <td>

                  <span className="status pending">
                    Desativado
                  </span>

                </td>

              </tr>

              <tr>

                <td>
                  Backup Automático
                </td>

                <td>

                  <span className="status delivered">
                    Ativado
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

export default Settings