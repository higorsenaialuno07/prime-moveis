import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const { user, signOut } = useAuth()

  async function handleLogout() {
    await signOut()
  }

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h2>Prime Móveis</h2>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Produtos</a>
          <a href="#">Pedidos</a>
          <a href="#">Clientes</a>
          <a href="#">Relatórios</a>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <h1>Painel Administrativo</h1>
            <p>
              Bem-vindo, {user?.email}
            </p>
          </div>

          <button onClick={handleLogout}>
            Sair
          </button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Vendas</h3>
            <strong>R$ 25.000</strong>
          </div>

          <div className="stat-card">
            <h3>Pedidos</h3>
            <strong>120</strong>
          </div>

          <div className="stat-card">
            <h3>Clientes</h3>
            <strong>80</strong>
          </div>

          <div className="stat-card">
            <h3>Produtos</h3>
            <strong>45</strong>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard