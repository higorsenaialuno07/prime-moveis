import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductFilter from '../components/products/ProductFilter'

import sofaLuxury from '../assets/images/sofa-luxury.png'
import tableImage from '../assets/images/table.webp'
import chairImage from '../assets/images/cadeira-premium.webp'
import poltronaImage from '../assets/images/poltrona-classic.webp'
import officeImage from '../assets/images/mesa-office.webp'
import heroImage from '../assets/images/Cama.webp'
import guardaRoupa from '../assets/images/guarda-roupa.webp'
import camaKing from '../assets/images/cama-king.webp'
import painelTv from '../assets/images/painel-tv.webp'
import estante from '../assets/images/estante.webp'
import armario from '../assets/images/armario.webp'
import mesaJantar from '../assets/images/mesa-jantar.webp'
import chairImage2 from '../assets/images/cadeira-home-office.webp'
import rackImage2 from '../assets/images/rack-suspenso.webp'
import rackImage3 from '../assets/images/rack-moderno.webp'
import rackImage4 from '../assets/images/rack-premium.webp'
import poltronaImage2 from '../assets/images/poltrona-reclinavel.webp'
import sofaLuxury2 from '../assets/images/sofa-compact.webp'
import chairImage3 from '../assets/images/cadeira-executiva.webp'
import sofaLuxury3 from '../assets/images/sofa-retratil.webp'
import officeImage2 from '../assets/images/mesa-gamer.webp'
import tableImage2 from '../assets/images/mesa-de-centro.webp'
import officeImage3 from '../assets/images/mesa-compact-office.webp'

function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('low')

  function handleBuy(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProduct = cart.find((item) => item.id === product.id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Produto adicionado ao carrinho!')
  }

  const products = [
  { id: 1, name: 'Sofá Luxury', description: 'Sofá moderno com acabamento premium.', price: 2599.98, image: sofaLuxury, category: 'sofas' },
  { id: 2, name: 'Mesa Elegance', description: 'Mesa sofisticada para ambientes modernos.', price: 771.86, image: tableImage, category: 'mesas' },
  { id: 3, name: 'Poltrona Classic', description: 'Conforto e design contemporâneo.', price: 940.71, image: poltronaImage, category: 'poltronas' },
  { id: 4, name: 'Cadeira Premium', description: 'Ideal para salas sofisticadas.', price: 1900.00, image: chairImage, category: 'cadeiras' },
  { id: 5, name: 'Rack Modern', description: 'Rack elegante para sua sala.', price: 865.72, image: rackImage3, category: 'racks' },
  { id: 6, name: 'Mesa Office', description: 'Perfeita para home office moderno.', price: 572.55, image: officeImage, category: 'escritorio' },

  { id: 7, name: 'Sofá Retrátil', description: 'Máximo conforto para sua sala.', price: 3299.90, image: sofaLuxury3, category: 'sofas' },
  { id: 8, name: 'Mesa de Centro', description: 'Design elegante e funcional.', price: 459.90, image: tableImage2, category: 'mesas' },
  { id: 9, name: 'Poltrona Reclinável', description: 'Ideal para descanso e leitura.', price: 1499.90, image: poltronaImage2, category: 'poltronas' },
  { id: 10, name: 'Cadeira Executiva', description: 'Ergonomia para o dia a dia.', price: 1299.90, image: chairImage3, category: 'cadeiras' },
  { id: 11, name: 'Rack Suspenso', description: 'Visual moderno e sofisticado.', price: 1099.90, image: rackImage2, category: 'racks' },
  { id: 12, name: 'Mesa Gamer', description: 'Espaço e conforto para jogos.', price: 899.90, image: officeImage2, category: 'escritorio' },

  { id: 13, name: 'Sofá Compact', description: 'Perfeito para apartamentos.', price: 1899.90, image: sofaLuxury2, category: 'sofas' },
  { id: 14, name: 'Mesa Jantar Luxo', description: 'Ideal para receber convidados.', price: 1799.90, image: mesaJantar, category: 'mesas' },
  { id: 15, name: 'Poltrona Relax', description: 'Conforto premium para sua casa.', price: 1199.90, image: poltronaImage, category: 'poltronas' },
  { id: 16, name: 'Cadeira Home Office', description: 'Produtividade com conforto.', price: 999.90, image: chairImage2, category: 'cadeiras' },
  { id: 17, name: 'Rack Premium', description: 'Acabamento sofisticado.', price: 1399.90, image: rackImage4, category: 'racks' },
  { id: 18, name: 'Mesa Compact Office', description: 'Ideal para espaços pequenos.', price: 499.90, image: officeImage3, category: 'escritorio' },
  { id: 19, name: 'Guarda-Roupa Elegance', description: 'Organização com estilo.', price: 2499.90, image: guardaRoupa, category: 'armarios' },
  { id: 20, name: 'Cama King Size', description: 'Conforto e luxo para seu quarto.', price: 3999.90, image: camaKing, category: 'camas' },
  { id: 21, name: 'Painel para TV', description: 'Design moderno para sua sala.', price: 899.90, image: painelTv, category: 'racks' },
  { id: 22, name: 'Estante Moderna', description: 'Organização com estilo contemporâneo.', price: 1299.90, image: estante, category: 'estantes' },
  { id: 23, name: 'Armário Multiuso', description: 'Versatilidade para qualquer ambiente.', price: 1599.90, image: armario, category: 'armarios' },
]

  const filteredProducts = products
    .filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'all' || product.category === category
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

      <main id="main-content">
        {/* HERO - Atualizado para w=800 batendo 100% com o seu index.html */}
        <section className="products-hero">
          <img 
  src={heroImage} 
  alt="Ambiente residencial decorado com móveis premium da Prime Móveis" 
  className="hero-bg-image"
  fetchPriority="high"
  loading="eager"
/>
          <div className="hero-overlay"></div>

          <div className="products-hero-content">
            <span className="products-badge">Catálogo Premium</span>
            <h1>Explore nossa coleção de móveis</h1>
            <p>Produtos modernos, sofisticados e desenvolvidos para transformar ambientes.</p>
            <Link to="/dashboard" className="dashboard-btn">Ir para Dashboard</Link>
          </div>
        </section>

        {/* PRODUTOS */}
        <section className="products-section">
          <div className="products-top">
            <h2>Todos os Produtos</h2>
            <p>{filteredProducts.length} produtos encontrados</p>
          </div>

          <ProductFilter
            search={search} setSearch={setSearch}
            category={category} setCategory={setCategory}
            sort={sort} setSort={setSort}
          />

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={`Foto descritiva do produto ${product.name}`}
                    loading={index >= 2 ? "lazy" : "eager"}
                    width="350"
                    height="260"
                    className="product-card-img" /* Classe específica adicionada */
                  />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="current-price">
  {product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}
</span>
                    </div>
                    <button
                      className="product-btn"
                      onClick={() => handleBuy(product)}
                      aria-label={`Adicionar ${product.name} ao seu carrinho`}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Products