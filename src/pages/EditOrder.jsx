/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { supabase } from '../services/supabase'

import '../styles/pages/edit-order.css'

function EditOrder() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  const [client, setClient] = useState('')
  const [total, setTotal] = useState('')
  const [status, setStatus] = useState('Pendente')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadOrder()
  }, [loadOrder])

  async function loadOrder() {

  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', Number(id))
    .maybeSingle()

  console.log(data)
  console.log(error)

  if (error) {
    console.log(error)
    return
  }

  if (!data) {
    alert('Pedido não encontrado')
    return
  }

  setClient(data.client || '')
  setTotal(data.total || '')
  setStatus(data.status || 'Pendente')

  setLoading(false)

}
  async function handleUpdateOrder(e) {

    e.preventDefault()

    const { error } = await supabase
      .from('orders')
      .update({
        client,
        total,
        status
      })
      .eq('id', Number(id))

    if (error) {
      console.log(error)
      alert('Erro ao atualizar pedido')
      return
    }

    alert('Pedido atualizado com sucesso')

    navigate('/orders')

  }

  async function handleDeleteOrder() {

    const confirmDelete = window.confirm(
      'Deseja realmente excluir este pedido?'
    )

    if (!confirmDelete) return

    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', Number(id))

    if (error) {
      console.log(error)
      alert('Erro ao excluir pedido')
      return
    }

    alert('Pedido removido com sucesso')

    navigate('/orders')

  }

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Carregando pedido...</h2>
      </div>
    )
  }

  return (

    <div className="dashboard-page">

      {/* SIDEBAR */}
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

          <Link
            to="/orders"
            className="active"
          >
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

        </nav>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>

            <h1>
              Editar Pedido
            </h1>

            <p>
              Atualize as informações do pedido
            </p>

          </div>

        </header>

        {/* FORM */}
        <section className="edit-order-container">

          <form
            onSubmit={handleUpdateOrder}
            className="edit-order-form"
          >

            <div className="form-group">

              <label>
                Cliente
              </label>

              <input
                type="text"
                placeholder="Nome do cliente"
                value={client}
                onChange={(e) =>
                  setClient(e.target.value)
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Total do Pedido
              </label>

              <input
                type="number"
                placeholder="Valor total"
                value={total}
                onChange={(e) =>
                  setTotal(e.target.value)
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >

                <option value="Pendente">
                  Pendente
                </option>

                <option value="Em produção">
                  Em produção
                </option>

                <option value="Entregue">
                  Entregue
                </option>

              </select>

            </div>

            {/* ACTIONS */}
            <div className="form-actions">

              <button
                type="submit"
                className="save-btn"
              >
                Salvar Alterações
              </button>

              <button
                type="button"
                className="delete-btn"
                onClick={handleDeleteOrder}
              >
                Excluir Pedido
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>

  )
}

export default EditOrder