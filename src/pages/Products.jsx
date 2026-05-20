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
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      category: 'Sofás',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      description:
        'Mesa sofisticada para ambientes modernos.',
      price: 1899,
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
      category: 'Mesas',
    },

    {
      id: 3,
      name: 'Poltrona Classic',
      description:
        'Conforto e design contemporâneo.',
      price: 1299,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      category: 'Poltronas',
    },

    {
      id: 4,
      name: 'Cadeira Premium',
      description:
        'Ideal para salas sofisticadas.',
      price: 799,
      image:
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254',
      category: 'Cadeiras',
    },

    {
      id: 5,
      name: 'Rack Modern',
      description:
        'Rack elegante para sua sala.',
      price: 1499,
      image:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a',
      category: 'Racks',
    },

    {
      id: 6,
      name: 'Mesa Office',
      description:
        'Perfeita para home office moderno.',
      price: 2199,
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
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