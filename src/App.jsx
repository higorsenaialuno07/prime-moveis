import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Clients from "./pages/Clients"
import Products from "./pages/Products"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

function App() {
  return (
    <Routes>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
  )
}

export default App