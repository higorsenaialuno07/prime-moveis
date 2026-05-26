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

      <select
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
      <select
        className="custom-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="low">Menor preço</option>
        <option value="high">Maior preço</option>
        <option value="popular">Mais vendidos</option>
      </select>

      <input
        type="text"
        className="search-input"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default ProductFilter;