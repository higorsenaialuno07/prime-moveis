import { useParams, Link } from "react-router-dom";
import "../styles/pages/orderDetails.css";

function OrderDetails() {
  const { id } = useParams();

  // simulação de dados (depois você pode puxar do backend/Supabase)
  const orders = [
    { id: 1, client: "João Silva", total: 1200, status: "Pendente", date: "25/05/2026" },
    { id: 2, client: "Maria Souza", total: 850, status: "Entregue", date: "24/05/2026" },
    { id: 3, client: "Carlos Lima", total: 540, status: "Em produção", date: "23/05/2026" }
  ];

  const order = orders.find((item) => item.id === Number(id));

  if (!order) {
    return (
      <div className="dashboard-page">
        <h2>Pedido não encontrado</h2>

        <Link to="/orders">
          Voltar para pedidos
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <main className="dashboard-main">

        <header className="dashboard-header">
          <h1>Detalhes do Pedido #{order.id}</h1>
        </header>

        <section className="order-details-card">

          <p><strong>Cliente:</strong> {order.client}</p>
          <p><strong>Data:</strong> {order.date}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> R$ {order.total}</p>

          <Link to="/orders" className="btn-secondary">
            Voltar
          </Link>

        </section>

      </main>

    </div>
  );
}

export default OrderDetails;