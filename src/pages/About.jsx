import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import empresaImage from '../assets/images/empresa.png'

import { useThemeContext } from '../context/ThemeContext'

function About() {
  const { theme } = useThemeContext()

  return (
    <div className={`about-page ${theme}`}>
      <Navbar />

      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">
            Sobre a Prime Móveis
          </span>

          <h1>
            Design moderno, conforto e sofisticação
          </h1>

          <p>
            A Prime Móveis nasceu com o objetivo de transformar
            ambientes através de móveis premium, elegantes e
            funcionais para todos os estilos de casa.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img
            src={empresaImage}
            alt="Empresa Prime Móveis"
          />
        </div>

        <div className="about-content">
          <h2>Nossa História</h2>

          <p>
            Trabalhamos com móveis de alta qualidade,
            priorizando conforto, design contemporâneo
            e acabamento premium.
          </p>

          <p>
            Nosso catálogo possui produtos modernos para
            salas, quartos, cozinhas e escritórios,
            oferecendo experiências sofisticadas para
            nossos clientes.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3>+5K</h3>
              <span>Clientes</span>
            </div>

            <div className="stat-box">
              <h3>+1K</h3>
              <span>Produtos</span>
            </div>

            <div className="stat-box">
              <h3>98%</h3>
              <span>Satisfação</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h2>Missão</h2>

          <p>
            Oferecer móveis sofisticados com alta qualidade,
            conforto e inovação.
          </p>
        </div>

        <div className="mission-card">
          <h2>Visão</h2>

          <p>
            Ser referência nacional em móveis modernos
            e design premium.
          </p>
        </div>

        <div className="mission-card">
          <h2>Valores</h2>

          <p>
            Qualidade, inovação, transparência
            e satisfação do cliente.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="section-title">
          <h2>Nossa Equipe</h2>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=11"
              alt="Lucas Martins"
            />

            <h3>Lucas Martins</h3>

            <span>CEO</span>
          </div>

          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Gabriel Santos"
            />

            <h3>Gabriel Santos</h3>

            <span>Designer</span>
          </div>

          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=13"
              alt="Marcos Silva"
            />

            <h3>Marcos Silva</h3>

            <span>Gerente</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About  