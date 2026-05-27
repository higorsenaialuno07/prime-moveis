import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Clients from "./pages/Clients";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import EditOrder from "./pages/EditOrder";
import OrderDetails from "./pages/OrderDetails";
import Cart from "./pages/Cart";

import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Catalogo from "./pages/Catalogo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />

      {/* PRODUTOS */}
      <Route path="/products" element={<Products />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/products/:id" element={<ProductView />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/edit/:id" element={<EditOrder />} />
      <Route path="/orders/:id" element={<OrderDetails />} />

      <Route path="/clients" element={<Clients />} />

      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;