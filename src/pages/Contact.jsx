import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-badge">
            Entre em Contato
          </span>

          <h1>
            Estamos prontos para ajudar você
          </h1>

          <p>
            Tire dúvidas, solicite informações ou fale
            com nossa equipe especializada.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Informações</h2>

            <div className="info-card">
              <Mail size={22} />

              <div>
                <h3>Email</h3>
                <p>contato@primemoveis.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={22} />

              <div>
                <h3>Telefone</h3>
                <p>(31) 99999-9999</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={22} />

              <div>
                <h3>Localização</h3>
                <p>Belo Horizonte - MG</p>
              </div>
            </div>

            <div className="info-card">
              <Clock size={22} />

              <div>
                <h3>Horário</h3>
                <p>Seg à Sex - 08:00 às 18:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <h2>Envie uma Mensagem</h2>

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Seu nome"
                />

                <input
                  type="email"
                  placeholder="Seu email"
                />
              </div>

              <input
                type="text"
                placeholder="Assunto"
              />

              <textarea
                placeholder="Digite sua mensagem"
                rows="6"
              ></textarea>

              <button type="submit">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  )
}

export default Contact