function ProductDetails({ product }) {
  return (
    <section className="product-details">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-content">
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <strong>
          R$ {product.price}
        </strong>

        <button>
          Adicionar ao Carrinho
        </button>
      </div>
    </section>
  )
}

export default ProductDetails