import { useAuth } from '../context/AuthContext'

function Dashboard() {

  const {
    user,
    signOut,
  } = useAuth()

  async function handleLogout() {
    await signOut()
  }

  return (

    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div>

          <h2 className="sidebar-logo">
            Prime Móveis
          </h2>

          <nav className="sidebar-nav">

            <a href="#">
              Dashboard
            </a>

            <a href="#">
              Produtos
            </a>

            <a href="#">
              Pedidos
            </a>

            <a href="#">
              Clientes
            </a>

            <a href="#">
              Relatórios
            </a>

            <a href="#">
              Configurações
            </a>

          </nav>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Sair
        </button>

      </aside>

      {/* CONTENT */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <h1>
              Painel Administrativo
            </h1>

            <p>
              Bem-vindo, {user?.email}
            </p>

          </div>

          <div className="dashboard-profile">

            <div className="profile-avatar">
              P
            </div>

          </div>

        </header>

        {/* STATS */}

        <section className="stats-grid">

          <div className="stat-card">
            <span>Total de Vendas</span>
            <h2>R$ 25.430</h2>
            <p>+12% este mês</p>
          </div>

          <div className="stat-card">
            <span>Pedidos</span>
            <h2>120</h2>
            <p>+8 novos pedidos</p>
          </div>

          <div className="stat-card">
            <span>Clientes</span>
            <h2>85</h2>
            <p>+15 clientes ativos</p>
          </div>

          <div className="stat-card">
            <span>Produtos</span>
            <h2>48</h2>
            <p>5 novos produtos</p>
          </div>

        </section>

        {/* TABLE */}

        <section className="dashboard-table">

          <div className="table-header">

            <h2>
              Pedidos Recentes
            </h2>

          </div>

          <table>

            <thead>

              <tr>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Lucas Silva</td>
                <td>Sofá Moderno</td>
                <td>R$ 2.499</td>
                <td>
                  <span className="status delivered">
                    Entregue
                  </span>
                </td>
              </tr>

              <tr>
                <td>Maria Souza</td>
                <td>Mesa Elegance</td>
                <td>R$ 1.799</td>
                <td>
                  <span className="status pending">
                    Pendente
                  </span>
                </td>
              </tr>

              <tr>
                <td>Pedro Lima</td>
                <td>Cadeira Premium</td>
                <td>R$ 899</td>
                <td>
                  <span className="status delivered">
                    Entregue
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

export default Dashboard