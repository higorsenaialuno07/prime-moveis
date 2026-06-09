import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

// 1. Carregamento dinâmico das páginas (Code Splitting)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Clients = lazy(() => import("./pages/Clients"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));
const Login = lazy(() => import("./pages/Login"));
const EditOrder = lazy(() => import("./pages/EditOrder"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Products = lazy(() => import("./pages/Products"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Catalogo = lazy(() => import("./pages/Catalogo"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));

function App() {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'dark'){
      document.body.classList.add('dark')
    }
  }, [])

  return (
    // 2. O Suspense gerencia o carregamento de cada página individualmente
    <Suspense fallback={
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        fontFamily: 'sans-serif',
        color: '#4a5568'
      }}>
        Carregando...
      </div>
    }>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />

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
    </Suspense>
  );
}

export default App;