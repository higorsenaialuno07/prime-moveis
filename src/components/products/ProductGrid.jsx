import ProductCard from './ProductCard'

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Sofá Moderno',
      description: 'Design sofisticado',
      price: '2.499',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      description: 'Mesa premium moderna',
      price: '1.899',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    },

    {
      id: 3,
      name: 'Cadeira Premium',
      description: 'Conforto e elegância',
      price: '799',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
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