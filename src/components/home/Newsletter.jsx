function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>
          Receba novidades e promoções
        </h2>

        <p>
          Cadastre seu email para receber ofertas.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Digite seu email"
          />

          <button>
            Inscrever-se
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter