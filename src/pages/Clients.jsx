import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pages/clients.css";

function Clients() {

  const [clients, setClients] = useState(() => {

    const savedClients = localStorage.getItem("clients");

    return savedClients
      ? JSON.parse(savedClients)
      : [
          {
            id: 1,
            name: "Lucas Silva",
            email: "lucas@gmail.com",
            status: "Ativo",
          },

          {
            id: 2,
            name: "Maria Souza",
            email: "maria@gmail.com",
            status: "Pendente",
          },
        ];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    localStorage.setItem(
      "clients",
      JSON.stringify(clients)
    );

  }, [clients]);

  function addClient(e) {

    e.preventDefault();

    if (!name || !email) {

      alert("Preencha todos os campos");
      return;

    }

    const newClient = {

      id: Date.now(),
      name,
      email,
      status: "Ativo",

    };

    setClients((prevClients) => [
      ...prevClients,
      newClient
    ]);

    setName("");
    setEmail("");

    alert("Cliente adicionado!");

  }

  return (

    <div className="dashboard-page">

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

            <h1>
              Clientes
            </h1>

            <p>
              Lista de clientes cadastrados
            </p>

          </div>

        </header>

        <form
          className="client-form"
          onSubmit={addClient}
        >

          <input
            type="text"
            placeholder="Nome do cliente"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email do cliente"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Adicionar Cliente
          </button>

        </form>

        <section className="dashboard-table">

          <div className="table-header">

            <h2>
              Clientes Recentes
            </h2>

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

              {clients.map((client) => (

                <tr key={client.id}>

                  <td>
                    {client.name}
                  </td>

                  <td>
                    {client.email}
                  </td>

                  <td>

                    <span className="status ativo">
                      {client.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default Clients;