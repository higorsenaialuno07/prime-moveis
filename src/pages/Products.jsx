  import { useState } from 'react'
  import { Link } from 'react-router-dom'

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

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [sort, setSort] = useState('low')

    const products = [
      {
        id: 1,
        name: 'Sofá Luxury',
        description: 'Sofá moderno com acabamento premium.',
        price: 2599.98,
        image: sofaLuxury,
        category: 'sofas',
      },
      {
        id: 2,
        name: 'Mesa Elegance',
        description: 'Mesa sofisticada para ambientes modernos.',
        price: 771.86,
        image: tableImage,
        category: 'mesas',
      },
      {
        id: 3,
        name: 'Poltrona Classic',
        description: 'Conforto e design contemporâneo.',
        price: 940.71,
        image: poltronaImage,
        category: 'poltronas',
      },
      {
        id: 4,
        name: 'Cadeira Premium',
        description: 'Ideal para salas sofisticadas.',
        price: 1900,
        image: chairImage,
        category: 'cadeiras',
      },
      {
        id: 5,
        name: 'Rack Modern',
        description: 'Rack elegante para sua sala.',
        price: 865.72,
        image: rackImage,
        category: 'racks',
      },
      {
        id: 6,
        name: 'Mesa Office',
        description: 'Perfeita para home office moderno.',
        price: 572.55,
        image: officeImage,
        category: 'escritorio',
      },
    ]

    const filteredProducts = products
      .filter((product) => {
        const matchSearch = product.name
          .toLowerCase()
          .includes(search.toLowerCase())

        const matchCategory =
          category === 'all' ||
          product.category === category

        return matchSearch && matchCategory
      })
      .sort((a, b) => {
        if (sort === 'low') return a.price - b.price
        if (sort === 'high') return b.price - a.price
        return 0
      })

    return (
      <div className="products-page">

        <Navbar />

        <section className="products-hero">
          <div className="products-hero-content">
            <span className="products-badge">Catálogo Premium</span>

            <h1>Explore nossa coleção de móveis</h1>

            <p>
              Produtos modernos, sofisticados e desenvolvidos para transformar ambientes.
            </p>

            <Link to="/dashboard" className="dashboard-btn">
              Ir para Dashboard
            </Link>
          </div>
        </section>

        <section className="products-section">

          <div className="products-top">
            <h2>Todos os Produtos</h2>
            <p>{filteredProducts.length} produtos encontrados</p>
          </div>

          {/* FILTRO COMPLETO */}
          <ProductFilter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </section>

        <Footer />

      </div>
    )
  }

  export default Products