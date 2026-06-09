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

      {/* Adicionado aria-label para descrever a categoria */}
      <select
        className="custom-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filtrar produtos por categoria"
      >
        <option value="all">Todos</option>
        <option value="sofas">Sofás</option>
        <option value="mesas">Mesas</option>
        <option value="cadeiras">Cadeiras</option>
        <option value="poltronas">Poltronas</option>
        <option value="racks">Racks</option>
        <option value="escritorio">Escritório</option>
      </select>

      {/* Adicionado aria-label para descrever a ordenação */}
      <select
        className="custom-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        aria-label="Ordenar produtos por preço ou popularidade"
      >
        <option value="low">Menor preço</option>
        <option value="high">Maior preço</option>
        <option value="popular">Mais vendidos</option>
      </select>

      {/* Adicionado aria-label para descrever o campo de pesquisa */}
      <input
        type="text"
        className="search-input"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Digitar nome do produto para pesquisar"
      />

    </div>
  );
}

export default ProductFilter;