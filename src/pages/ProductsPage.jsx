import { useState } from "react";

import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";

import sofaLuxury from "../assets/images/sofa-luxury.jpeg";
import tableImage from "../assets/images/table.jpeg";
import chairImage from "../assets/images/cadeira-premium.jpeg";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("low");

  const [products] = useState([
    {
      id: 1,
      name: "Sofá Luxo",
      category: "sofas",
      price: 2500,
      image: sofaLuxury,
    },
    {
      id: 2,
      name: "Mesa de Jantar",
      category: "mesas",
      price: 1200,
      image: tableImage,
    },
    {
      id: 3,
      name: "Cadeira Premium",
      category: "cadeiras",
      price: 400,
      image: chairImage,
    },
  ]);

  // 🔥 FILTRO 100% FUNCIONAL
  const filteredProducts = products
    .filter((product) => {
  const productCategory = (product.category || "").toLowerCase();
  const selectedCategory = (category || "").toLowerCase();

  const matchCategory =
    selectedCategory === "all" ||
    productCategory === selectedCategory;

  const matchSearch =
    (product.name || "")
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchCategory && matchSearch;

  console.log("category:", category);
console.log("sort:", sort);
console.log("search:", search);
})
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page">

      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>

    </div>
  );
}

export default ProductsPage;