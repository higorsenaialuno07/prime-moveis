function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">
          Loja Premium
        </span>

        <h1>
          Móveis sofisticados para ambientes modernos
        </h1>

        <p>
          Descubra produtos exclusivos com design elegante,
          conforto e alta qualidade.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Comprar Agora
          </button>

          <button className="secondary-btn">
            Ver Catálogo
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="../assets/"
          alt="Móveis"
        />
      </div>
    </section>
  )
}

export default Hero