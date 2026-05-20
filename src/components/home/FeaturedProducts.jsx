import ProductCard from '../products/ProductCard'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Sofá Luxury',
      description: 'Conforto premium',
      price: '3.999',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    },

    {
      id: 2,
      name: 'Mesa Gold',
      description: 'Mesa moderna elegante',
      price: '2.199',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    },

    {
      id: 3,
      name: 'Poltrona Classic',
      description: 'Design sofisticado',
      price: '1.299',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    },
  ]

  return (
    <section className="featured-products">
      <div className="section-title">
        <h2>Produtos em Destaque</h2>
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

export default FeaturedProducts