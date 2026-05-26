import { Link } from 'react-router-dom'
import '../styles/pages/orders.css'

function Orders() {
  const orders = [
    { id: 1, client: 'João Silva', total: 1200, status: 'Pendente', date: '25/05/2026' },
    { id: 2, client: 'Maria Souza', total: 850, status: 'Entregue', date: '24/05/2026' },
    { id: 3, client: 'Carlos Lima', total: 540, status: 'Em produção', date: '23/05/2026' }
  ]

  const formatStatus = (status) =>
    status.toLowerCase().replace(/\s/g, '-')

  const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">Prime Móveis</h2>

        <nav className="sidebar-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/orders" className="active">Pedidos</Link>
          <Link to="/clients">Clientes</Link>
          <Link to="/reports">Relatórios</Link>
          <Link to="/settings">Configurações</Link>
          <Link to="/logout" className="logout-btn">Sair</Link>
        </nav>
        
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">
          <div>
            <h1>Pedidos</h1>
            <p>Gerencie todos os pedidos do sistema</p>
          </div>
        </header>

        {/* ORDERS */}
        <section className="orders-section">

          <div className="orders-grid">

            {orders.map((order) => (
              <article key={order.id} className="order-card">

                <div className="order-top">
                  <div>
                    <h3>Pedido #{order.id}</h3>
<small>
  {order.date}
</small>
                  </div>

                  <span className={`status ${formatStatus(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="order-info">
                  <p><strong>Cliente:</strong> {order.client}</p>
                  <p><strong>Total:</strong> {formatCurrency(order.total)}</p>
                </div>

                <div className="order-actions">

  <Link
    to={`/orders/edit/${order.id}`}
    className="btn-secondary"
  >
    Editar
  </Link>

  <Link
    to={`/orders/${order.id}`}
    className="btn-primary"
  >
    Ver detalhes
  </Link>

</div>

              </article>
            ))}

          </div>

        </section>

      </main>
    </div>
  )
}

export default Orders