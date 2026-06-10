import ProductCard from './ProductCard'

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Sofá Moderno',
      description: 'Design sofisticado',
      price: '2.499',
      image:
        '../assets/images/sofa-luxury.webp',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      description: 'Mesa premium moderna',
      price: '1.899',
      image:
        '../assets/images/table.webp',
    },

    {
      id: 3,
      name: 'Cadeira Premium',
      description: 'Conforto e elegância',
      price: '799',
      image:
        '../assets/images/cadeira-premium.webp',
    },
  ]

  return (
    <section className="products-section">
      <div className="section-title">
        <h2>Produtos</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid