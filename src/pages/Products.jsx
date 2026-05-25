import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductFilter from '../components/products/ProductFilter'
import ProductCard from '../components/products/ProductCard'

import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'
import chairImage from '../assets/images/cadeira-premium.jpeg'
import poltronaImage from '../assets/images/poltrona-classic.jpeg'
import rackImage from '../assets/images/rack.jpeg'
import officeImage from '../assets/images/mesa-office.jpeg'



function Products() {
  const products = [
  {
    id: 1,
    name: 'Sofá Luxury',
    description:
      'Sofá moderno com acabamento premium.',
    price: 2599.98,
    image: sofaLuxury,
    category: 'Sofás',
  },

  {
    id: 2,
    name: 'Mesa Elegance',
    description:
      'Mesa sofisticada para ambientes modernos.',
    price: 771.86,
    image: tableImage,
    category: 'Mesas',
  },

  {
    id: 3,
    name: 'Poltrona Classic',
    description:
      'Conforto e design contemporâneo.',
    price:  940.71,
    image: poltronaImage,
    category: 'Poltronas',
  },

  {
    id: 4,
    name: 'Cadeira Premium',
    description:
      'Ideal para salas sofisticadas.',
    price: 1900,
    image: chairImage,
    category: 'Cadeiras',
  },

  {
    id: 5,
    name: 'Rack Modern',
    description:
      'Rack elegante para sua sala.',
    price: 865.72,
    image: rackImage,
    category: 'Racks',
  },

  {
    id: 6,
    name: 'Mesa Office',
    description:
      'Perfeita para home office moderno.',
    price: 572.55,
    image: officeImage,
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