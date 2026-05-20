import { Bell, Search } from 'lucide-react'

function Header() {
  return (
    <header className="dashboard-header">
      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Pesquisar..."
        />
      </div>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
        </button>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt=""
          />

          <span>Administrador</span>
        </div>
      </div>
    </header>
  )
}

export default Header