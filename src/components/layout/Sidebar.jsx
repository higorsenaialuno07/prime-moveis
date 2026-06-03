import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Sofa,
  ShoppingCart,
  Users,
  BarChart3,
  Settings as SettingsIcon
} from 'lucide-react'

function Sidebar() {

  const location = useLocation()

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="sidebar-menu">

        <Link
          to="/dashboard"
          className={
            location.pathname === '/dashboard'
              ? 'active'
              : ''
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/products"
          className={
            location.pathname === '/products'
              ? 'active'
              : ''
          }
        >
          <Sofa size={20} />
          Produtos
        </Link>

        <Link
          to="/orders"
          className={
            location.pathname === '/orders'
              ? 'active'
              : ''
          }
        >
          <ShoppingCart size={20} />
          Pedidos
        </Link>

        <Link
          to="/clients"
          className={
            location.pathname === '/clients'
              ? 'active'
              : ''
          }
        >
          <Users size={20} />
          Clientes
        </Link>

        <Link
          to="/reports"
          className={
            location.pathname === '/reports'
              ? 'active'
              : ''
          }
        >
          <BarChart3 size={20} />
          Relatórios
        </Link>

        <Link
  to="/settings"
  className={
    location.pathname === '/settings'
      ? 'active'
      : ''
  }
>
  <SettingsIcon size={20} />
  Configurações
</Link> 

      </nav>

    </aside>
  )
}

export default Sidebar