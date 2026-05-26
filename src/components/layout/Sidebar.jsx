import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Sofa,
  ShoppingCart,
  Users,
  BarChart3,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="sidebar-menu">

        <Link to="/dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link to="/products">
          <Sofa size={20} />
          Produtos
        </Link>

        <Link to="/orders">
          <ShoppingCart size={20} />
          Pedidos
        </Link>

        <Link to="/clients">
          <Users size={20} />
          Clientes
        </Link>

        <Link to="/reports">
          <BarChart3 size={20} />
          Relatórios
        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;