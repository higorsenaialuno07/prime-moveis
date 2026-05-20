function ProductFilter() {
  return (
    <div className="product-filter">
      <select>
        <option>Todos</option>
        <option>Sofás</option>
        <option>Mesas</option>
        <option>Cadeiras</option>
      </select>

      <select>
        <option>Menor preço</option>
        <option>Maior preço</option>
        <option>Mais vendidos</option>
      </select>

      <input
        type="text"
        placeholder="Pesquisar produto..."
      />
    </div>
  )
}

export default ProductFilter