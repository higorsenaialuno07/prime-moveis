import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h2 className="footer-logo">
            Prime Móveis
          </h2>

          <p className="footer-description">
            Transforme sua casa com móveis modernos,
            sofisticados e pensados para oferecer
            conforto, beleza e durabilidade.
          </p>

          <div className="footer-socials">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Institucional</h3>

          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/products">Produtos</a>
            <a href="/about">Quem Somos</a>
            <a href="/contact">Contato</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Categorias</h3>

          <div className="footer-links">
            <a href="#">Sofás</a>
            <a href="#">Mesas</a>
            <a href="#">Cadeiras</a>
            <a href="#">Guarda-Roupas</a>
            <a href="#">Estantes</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Belo Horizonte - MG</span>
            </div>

            <div className="footer-contact-item">
              <FaPhoneAlt />
              <span>(31) 99999-9999</span>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope />
              <span>contato@primemoveis.com</span>
            </div>

          </div>

          <div className="footer-newsletter">
            <p>
              Receba ofertas e novidades exclusivas.
            </p>

            <form>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
              />

              <button type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Prime Móveis. Todos os direitos reservados.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Trocas e Devoluções</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer