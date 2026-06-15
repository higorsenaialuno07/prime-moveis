import { useState } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'

function Contact() {
 const [formData, setFormData] = useState({
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
})

 
const [showMap, setShowMap] = useState(false)
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Mensagem enviada com sucesso!')

    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    })
  }

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
                <p>contato@primemoveis.com.br</p>
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

    <button
      className="show-map-btn"
      onClick={() => setShowMap(!showMap)}
    >
      {showMap ? 'Ocultar Mapa' : 'Ver Localização'}
    </button>
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
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <h2>Envie uma Mensagem</h2>

              <div className="input-group">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
              />

              <textarea
                name="mensagem"
                placeholder="Digite sua mensagem"
                rows="6"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </section>

      {showMap && (
  <section className="map-section">
    <iframe
      title="Mapa Prime Móveis"
      src="https://www.google.com/maps?q=Belo%20Horizonte%20MG&output=embed"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
)}

      <Footer />
    </div>
  )
}

export default Contact