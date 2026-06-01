import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  useThemeContext
} from '../context/ThemeContext'
import '../styles/pages/settings.css'

function Settings() {

  const [notifications, setNotifications] = useState(true)
  const [backup, setBackup] = useState(true)
  const {
  theme,
  toggleTheme
} = useThemeContext()

  // 💾 CARREGAR
  useEffect(() => {
    const saved = localStorage.getItem('settings')

    if (saved) {
      const data = JSON.parse(saved)

      setNotifications(data.notifications ?? true)
      setBackup(data.backup ?? true)
    }
  }, [])

  // 💾 SALVAR
  useEffect(() => {
   localStorage.setItem(
  'settings',
  JSON.stringify({
    notifications,
    backup
  })
)
  }, [notifications, backup])





  // 🔄 RESET
  function resetSettings() {
  setNotifications(true)
  setBackup(true)

  localStorage.removeItem('settings')

  if (theme === 'dark') {
    toggleTheme()
  }
}

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <h2 className="sidebar-logo">Prime Móveis</h2>

        <nav className="sidebar-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/orders">Pedidos</Link>
          <Link to="/clients">Clientes</Link>
          <Link to="/reports">Relatórios</Link>
          <Link to="/settings">Configurações</Link>
          <Link to="/logout" className="logout-btn">Sair</Link>
        </nav>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Configurações</h1>
            <p>Gerencie as configurações do sistema</p>
          </div>
        </header>

        {/* CARDS */}
        <section className="settings-grid">

          <div className="stat-card">
            <span>Nome da Loja</span>
            <h2>Prime Móveis</h2>
            <p>Sistema ativo</p>
          </div>

          <div className="stat-card">
            <span>Email</span>
            <h2>suporte@primemoveis.com</h2>
            <p>Email principal</p>
          </div>

          <div className="stat-card">
            <span>Status</span>
            <h2>Online</h2>
            <p>Funcionando normalmente</p>
          </div>

        </section>

        {/* TABLE */}
        <section className="dashboard-table">

          <div className="table-header">
            <h2>Preferências</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Configuração</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {/* NOTIFICAÇÕES */}
              <tr>
                <td>Notificações</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={() => setNotifications(!notifications)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
              </tr>

              {/* TEMA ESCURO */}
              <tr>
                <td>Tema Escuro</td>
                <td>
                  <label className="switch">
                    <input
  type="checkbox"
  checked={theme === 'dark'}
  onChange={toggleTheme}
/>
                    <span className="slider"></span>
                  </label>
                </td>
              </tr>

              {/* BACKUP */}
              <tr>
                <td>Backup Automático</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={backup}
                      onChange={() => setBackup(!backup)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
              </tr>

            </tbody>
          </table>

          {/* RESET */}
          <button className="reset-btn" onClick={resetSettings}>
            Resetar configurações
          </button>

        </section>

      </main>

    </div>
  )
}

export default Settings