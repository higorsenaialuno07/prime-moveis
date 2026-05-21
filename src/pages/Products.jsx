import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductFilter from '../components/products/ProductFilter'
import ProductCard from '../components/products/ProductCard'

function Products() {
  const products = [
    {
      id: 1,
      name: 'Sofá Luxury',
      description:
        'Sofá moderno com acabamento premium.',
      price: 3999,
      image:
        '../assets/images/sofa-luxury.jpeg',
      category: 'Sofás',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      description:
        'Mesa sofisticada para ambientes modernos.',
      price: 1899,
      image:
        '../assets/images/mesa-gold.jpeg',
      category: 'Mesas',
    },

    {
      id: 3,
      name: 'Poltrona Classic',
      description:
        'Conforto e design contemporâneo.',
      price: 1299,
      image:
        '../assets/images/poltrona-classic.jpeg',
      category: 'Poltronas',
    },

    {
      id: 4,
      name: 'Cadeira Premium',
      description:
        'Ideal para salas sofisticadas.',
      price: 799,
      image:
        '../assets/images/cadeira-premium.jpeg',
      category: 'Cadeiras',
    },

    {
      id: 5,
      name: 'Rack Modern',
      description:
        'Rack elegante para sua sala.',
      price: 1499,
      image:
        '../assets/images/rack-modern.jpeg',
      category: 'Racks',
    },

    {
      id: 6,
      name: 'Mesa Office',
      description:
        'Perfeita para home office moderno.',
      price: 2199,
      image:
        '../assets/images/mesa-office.jpeg',
      category: 'Escritório',
    },
  ]

  return (
    <div className="products-page">
      <Navbar />

      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-badge">
            Catálogo Premium
          </span>

          <h1>
            Explore nossa coleção de móveis
          </h1>

          <p>
            Produtos modernos, sofisticados e
            desenvolvidos para transformar
            ambientes.
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="products-top">
          <h2>Todos os Produtos</h2>

          <p>
            {products.length} produtos encontrados
          </p>
        </div>

        <ProductFilter />

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products