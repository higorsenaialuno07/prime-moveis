import { supabase } from "../../services/supabase";

function ProductCard({ product }) {

  const specialCard =
    product?.name === "Sofá Luxury" ||
    product?.name === "Poltrona Classic";

  async function addToCart() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Faça login primeiro");
        return;
      }

      const { error } = await supabase
        .from("cart_items")
        .insert([
          {
            user_id: user.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ]);

      if (error) {
        console.log(error.message);
        alert("Erro ao adicionar produto");
        return;
      }

      alert("Produto adicionado ao carrinho!");
    } catch (err) {
      console.log(err);
      alert("Erro inesperado");
    }
  }

  return (
    <div
      className={
        specialCard
          ? "product-card product-card-sofa"
          : "product-card"
      }
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        {/* evita erro se não existir description */}
        {product.description && <p>{product.description}</p>}

        <strong>R$ {product.price}</strong>

        <button onClick={addToCart}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;