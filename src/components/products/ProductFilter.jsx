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

      {/* Filtro de Categoria com Label Semântica */}
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
        </select>
      </div>

      {/* Filtro de Ordenação com Label Semântica */}
      <div className="filter-item">
        <label htmlFor="sort-select" style={hiddenLabelStyle}>
          Ordenar produtos por preço ou popularidade
        </label>
        <select
          id="sort-select"
          className="custom-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Menor preço</option>
          <option value="high">Maior preço</option>
          <option value="popular">Mais vendidos</option>
        </select>
      </div>

      {/* Campo de Busca com Label Semântica */}
      <div className="filter-item">
        <label htmlFor="search-input" style={hiddenLabelStyle}>
          Digitar nome do produto para pesquisar
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
  );
}

// Objeto de estilo para esconder as labels visualmente sem perder acessibilidade (Padrão Screen Reader Only)
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
};

export default ProductFilter;