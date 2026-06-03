import { useEffect, useState } from 'react'

import { useAuth } from '../context/AuthContext'
import { supabase } from '../services/supabase'
import { Link } from 'react-router-dom'

function Dashboard() {

  const {
    user,
    signOut,
  } = useAuth()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {

    const { data, error } = await supabase
      .from('orders')
      .select('*')

    if(error){
      console.log(error)
      return
    }

    setOrders(data)
  }

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

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/products">
              Produtos
            </Link>

            <Link to="/orders">
              Pedidos
            </Link>

            <Link to="/clients">
              Clientes
            </Link>

            <Link to="/reports">
              Relatórios
            </Link>

            <Link to="/settings">
              Configurações
            </Link>

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
            <h2>{orders.length}</h2>
            <p>Pedidos realizados</p>
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

  {orders.map((order) => (

    <tr key={order.id}>

      <td>
        {order.client}
      </td>

      <td>
        Pedido Finalizado
      </td>

      <td>
        R$ {Number(order.total).toFixed(2)}
      </td>

      <td>

        <span
          className={`status ${
            order.status?.toLowerCase() === 'pendente'
              ? 'pending'
              : 'delivered'
          }`}
        >
          {order.status}
        </span>

      </td>

    </tr>

  ))}

</tbody>

          </table>

        </section>

      </main>

    </div>

  )
}

export default Dashboard