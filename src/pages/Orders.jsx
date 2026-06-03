import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useThemeContext } from '../context/ThemeContext'
import { supabase } from '../services/supabase'

import '../styles/pages/orders.css'

function Orders() {
  const { theme } = useThemeContext()

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', {
          ascending: false
        })

      if (error) {
        console.error(error)
        return
      }

      setOrders(data || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatStatus = (status = '') =>
    status
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '-')

  const formatCurrency = (value) =>
    Number(value || 0).toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )

  return (
    <div className={`dashboard-page ${theme}`}>
      <aside className="sidebar">
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

          <Link
            to="/orders"
            className="active"
          >
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

          <Link
            to="/logout"
            className="logout-btn"
          >
            Sair
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Pedidos</h1>

            <p>
              Gerencie todos os pedidos
              do sistema
            </p>
          </div>
        </header>

        <section className="orders-section">
          {loading ? (
            <p>Carregando pedidos...</p>
          ) : orders.length === 0 ? (
            <p>Nenhum pedido encontrado.</p>
          ) : (
            <div className="orders-grid">
              {orders.map((order) => (
                <article
                  key={order.id}
                  className="order-card"
                >
                  <div className="order-top">
                    <div>
                      <h3>
                        Pedido #{order.id}
                      </h3>

                      <small>
                        {order.created_at
                          ? new Date(
                              order.created_at
                            ).toLocaleDateString(
                              'pt-BR'
                            )
                          : '-'}
                      </small>
                    </div>

                    <span
                      className={`status ${formatStatus(
                        order.status
                      )}`}
                    >
                      {order.status ||
                        'Sem status'}
                    </span>
                  </div>

                  <div className="order-info">
                    <p>
                      <strong>
                        Cliente:
                      </strong>{' '}
                      {order.client ||
                        'Não informado'}
                    </p>

                    <p>
                      <strong>
                        Total:
                      </strong>{' '}
                      {formatCurrency(
                        order.total
                      )}
                    </p>
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
          )}
        </section>
      </main>
    </div>
  )
}

export default Orders