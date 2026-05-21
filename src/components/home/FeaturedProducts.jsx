import ProductCard from '../products/ProductCard'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Sofá Luxury',
      description: 'Conforto premium',
      price: '3.999',
      image:
        '../assets/images/sofa-luxury.jpeg',
    },

    {
      id: 2,
      name: 'Mesa Gold',
      description: 'Mesa moderna elegante',
      price: '2.199',
      image:
        '../assets/images/mesa-gold.jpeg',
    },

    {
      id: 3,
      name: 'Poltrona Classic',
      description: 'Design sofisticado',
      price: '1.299',
      image:
        '../assets/images/poltrona-classic.jpeg',
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