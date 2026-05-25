import { Link } from 'react-router-dom'

function Orders() {

  // exemplo de dados (depois você pode puxar do banco)
  const orders = [
    {
      id: 1,
      client: 'João Silva',
      total: 1200,
      status: 'Pendente',
      date: '25/05/2026'
    },
    {
      id: 2,
      client: 'Maria Souza',
      total: 850,
      status: 'Entregue',
      date: '24/05/2026'
    },
    {
      id: 3,
      client: 'Carlos Lima',
      total: 540,
      status: 'Em produção',
      date: '23/05/2026'
    }
  ]

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div>

          <h2 className="sidebar-logo">
            Prime Móveis
          </h2>

          <nav className="sidebar-nav">

            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Produtos</Link>
            <Link to="/orders">Pedidos</Link>
            <Link to="/clients">Clientes</Link>
            <Link to="/reports">Relatórios</Link>
            <Link to="/settings">Configurações</Link>

          </nav>

        </div>

      </aside>

      {/* CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Pedidos</h1>
            <p>Todos os pedidos realizados</p>
          </div>

        </header>

        {/* ORDERS CONTENT */}
        <section className="orders-section">

          <div className="orders-grid">

            {orders.map(order => (
              <div key={order.id} className="order-card">

                <div className="order-top">
                  <h3>Pedido #{order.id}</h3>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>

                <p><strong>Cliente:</strong> {order.client}</p>
                <p><strong>Data:</strong> {order.date}</p>
                <p><strong>Total:</strong> R$ {order.total}</p>

                <div className="order-actions">
                  <button>Ver detalhes</button>
                  <button>Editar</button>
                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  )
}

export default Orders   