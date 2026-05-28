import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductFilter from '../components/products/ProductFilter'

import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'
import chairImage from '../assets/images/cadeira-premium.jpeg'
import poltronaImage from '../assets/images/poltrona-classic.jpeg'
import rackImage from '../assets/images/rack.jpeg'
import officeImage from '../assets/images/mesa-office.jpeg'

function Products() {

  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('low')

  // FUNÇÃO COMPRAR
  function handleBuy(product) {

    const cart =
      JSON.parse(localStorage.getItem('cart')) || []

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if(existingProduct){

      existingProduct.quantity += 1

    } else {

      cart.push({
        ...product,
        quantity: 1
      })

    }

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    )

    alert('Produto adicionado ao carrinho!')

    navigate('/cart')
  }

  const products = [

    {
      id: 1,
      name: 'Sofá Luxury',
      description:
        'Sofá moderno com acabamento premium.',
      price: 2599.98,
      image: sofaLuxury,
      category: 'sofas',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      description:
        'Mesa sofisticada para ambientes modernos.',
      price: 771.86,
      image: tableImage,
      category: 'mesas',
    },

    {
      id: 3,
      name: 'Poltrona Classic',
      description:
        'Conforto e design contemporâneo.',
      price: 940.71,
      image: poltronaImage,
      category: 'poltronas',
    },

    {
      id: 4,
      name: 'Cadeira Premium',
      description:
        'Ideal para salas sofisticadas.',
      price: 1900,
      image: chairImage,
      category: 'cadeiras',
    },

    {
      id: 5,
      name: 'Rack Modern',
      description:
        'Rack elegante para sua sala.',
      price: 865.72,
      image: rackImage,
      category: 'racks',
    },

    {
      id: 6,
      name: 'Mesa Office',
      description:
        'Perfeita para home office moderno.',
      price: 572.55,
      image: officeImage,
      category: 'escritorio',
    },

  ]

  const filteredProducts = products
    .filter((product) => {

      const matchSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchCategory =
        category === 'all' ||
        product.category === category

      return matchSearch && matchCategory

    })

    .sort((a, b) => {

      if(sort === 'low')
        return a.price - b.price

      if(sort === 'high')
        return b.price - a.price

      return 0
    })

  return (

    <div className="products-page">

      <Navbar />

      {/* HERO */}
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
            desenvolvidos para transformar ambientes.
          </p>

          <Link
            to="/dashboard"
            className="dashboard-btn"
          >
            Ir para Dashboard
          </Link>

        </div>

      </section>

      {/* PRODUTOS */}
      <section className="products-section">

        <div className="products-top">

          <h2>
            Todos os Produtos
          </h2>

          <p>
            {filteredProducts.length}
            {' '}
            produtos encontrados
          </p>

        </div>

        {/* FILTRO */}
        <ProductFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        {/* GRID */}
        <div className="products-grid">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-content">

                <h3>
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-footer">

                  <div className="product-price">

                    <span className="current-price">

                      R$ {product.price.toFixed(2)}

                    </span>

                  </div>

                  <button
                    className="product-btn"
                    onClick={() =>
                      handleBuy(product)
                    }
                  >
                    Comprar
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Products