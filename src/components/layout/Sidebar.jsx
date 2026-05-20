import {
  LayoutDashboard,
  Sofa,
  ShoppingCart,
  Users,
  BarChart3,
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="sidebar-menu">
        <a href="#">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#">
          <Sofa size={20} />
          Produtos
        </a>

        <a href="#">
          <ShoppingCart size={20} />
          Pedidos
        </a>

        <a href="#">
          <Users size={20} />
          Clientes
        </a>

        <a href="#">
          <BarChart3 size={20} />
          Relatórios
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar