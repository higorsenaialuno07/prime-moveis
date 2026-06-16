function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <div className="product-filter">

      <div className="filter-item">
        <label htmlFor="category-select" style={hiddenLabelStyle}>
          Filtrar produtos por categoria
        </label>

        <select
          id="category-select"
          className="custom-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="sofas">Sofás</option>
          <option value="mesas">Mesas</option>
          <option value="cadeiras">Cadeiras</option>
          <option value="poltronas">Poltronas</option>
          <option value="racks">Racks</option>
          <option value="escritorio">Escritório</option>
          <option value="armarios">Armários</option>
          <option value="camas">Camas</option>
          <option value="estantes">Estantes</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="sort-select" style={hiddenLabelStyle}>
          Ordenar produtos por preço
        </label>

        <select
          id="sort-select"
          className="custom-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Menor preço</option>
          <option value="high">Maior preço</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="search-input" style={hiddenLabelStyle}>
          Pesquisar produto
        </label>

        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </div>
  )
}

const hiddenLabelStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0'
}

export default ProductFilter