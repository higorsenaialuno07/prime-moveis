import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { supabase } from '../services/supabase'
import { useAuth } from '../context/AuthContext'

import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'
import chairImage from '../assets/images/cadeira-premium.jpeg'
import poltronaImage from '../assets/images/poltrona-classic.jpeg'
import rackImage from '../assets/images/rack.jpeg'
import officeImage from '../assets/images/mesa-office.jpeg'

import '../styles/pages/catalogo.css'

function Catalogo() {

  const navigate = useNavigate()

  const { user } = useAuth()

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
      category: 'Sofás',
      description:
        'Design sofisticado para ambientes premium.',
      price: 'R$ 2.599,98',
      image: sofaLuxury
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      category: 'Mesas',
      description:
        'Perfeita para salas modernas.',
      price: 'R$ 771,86',
      image: tableImage
    },

    {
      id: 3,
      name: 'Cadeira Premium',
      category: 'Cadeiras',
      description:
        'Conforto e elegância no mesmo produto.',
      price: 'R$ 1.900,00',
      image: chairImage
    },

    {
      id: 4,
      name: 'Poltrona Classic',
      category: 'Poltronas',
      description:
        'Conforto absoluto com acabamento refinado.',
      price: 'R$ 940,71',
      image: poltronaImage
    },

    {
      id: 5,
      name: 'Rack Modern',
      category: 'Racks',
      description:
        'Ideal para salas sofisticadas e modernas.',
      price: 'R$ 865,72',
      image: rackImage
    },

    {
      id: 6,
      name: 'Mesa Office',
      category: 'Escritório',
      description:
        'Perfeita para home office profissional.',
      price: 'R$ 572,55',
      image: officeImage
    }

  ]

  return (

    <div className="catalog-page">

      <Navbar />

      {/* HERO */}
      <section className="catalog-hero">

        <div className="catalog-overlay">

          <span className="catalog-badge">
            Catálogo Oficial
          </span>

          <h1>
            Coleção Prime Móveis 2026
          </h1>

          <p>
            Descubra móveis premium desenvolvidos
            para transformar ambientes com elegância,
            conforto e sofisticação.
          </p>

          <div className="catalog-buttons">

            <Link
              to="/products"
              className="catalog-btn-primary"
            >
              Explorar Produtos
            </Link>

            <a
              href="#catalog-products"
              className="catalog-btn-secondary"
            >
              Ver Coleção
            </a>

          </div>

        </div>

      </section>

      {/* INFO */}
      <section className="catalog-info">

        <div className="info-card">
          <h2>+500</h2>
          <p>Clientes satisfeitos</p>
        </div>

        <div className="info-card">
          <h2>Premium</h2>
          <p>Qualidade garantida</p>
        </div>

        <div className="info-card">
          <h2>2026</h2>
          <p>Coleção exclusiva</p>
        </div>

        <div className="info-card">
          <h2>100%</h2>
          <p>Design moderno</p>
        </div>

      </section>

      {/* PRODUCTS */}
      <section
        className="catalog-products"
        id="catalog-products"
      >

        <div className="catalog-title">

          <span>
            Produtos Premium
          </span>

          <h2>
            Nossa Coleção
          </h2>

          <p>
            Produtos desenvolvidos para elevar
            o nível do seu ambiente.
          </p>

        </div>

        <div className="catalog-grid">

          {products.map((product) => (

            <div
              key={product.id}
              className="catalog-card"
            >

              <div className="catalog-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="catalog-category">
                  {product.category}
                </span>

              </div>

              <div className="catalog-content">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <div className="catalog-footer">

                  <span className="catalog-price">
                    {product.price}
                  </span>

                  <button
                    className="catalog-buy-btn"
                    onClick={() => handleBuy(product)}
                  >
                    Comprar
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="catalog-cta">

        <div className="cta-content">

          <h2>
            Transforme sua casa hoje mesmo
          </h2>

          <p>
            Móveis modernos, sofisticados e feitos
            para impressionar.
          </p>

          <Link
            to="/products"
            className="cta-btn"
          >
            Ir para Produtos
          </Link>

        </div>

      </section>

      <Footer />

    </div>

  )
}

export default Catalogo