import { Link } from "react-router-dom";
import "../styles/pages/clients.css";

function Clients() {
  return (
    <div className="dashboard-page">

      <aside className="sidebar">
        <h2 className="sidebar-logo">Prime Móveis</h2>

        <nav className="sidebar-nav">

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/orders">Pedidos</Link>
          <Link to="/clients">Clientes</Link>
          <Link to="/reports">Relatórios</Link>
          <Link to="/settings">Configurações</Link>

          <Link to="/logout" className="logout-btn">
            Sair
          </Link>

        </nav>
      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Clientes</h1>
            <p>Lista de clientes cadastrados</p>
          </div>
        </header>

        <section className="dashboard-table">

          <div className="table-header">
            <h2>Clientes Recentes</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lucas Silva</td>
                <td>lucas@gmail.com</td>
                <td><span className="status ativo">Ativo</span></td>
              </tr>

              <tr>
                <td>Maria Souza</td>
                <td>maria@gmail.com</td>
                <td><span className="status pendente">Pendente</span></td>
              </tr>
            </tbody>
          </table>

        </section>

      </main>
    </div>
  );
}

export default Clients;