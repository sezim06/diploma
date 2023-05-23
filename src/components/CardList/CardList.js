import { useContext } from "react";
import "./CardList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CardList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...CardList,
      [product.id]: qty,
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.slug}>{product.name}</Link>

        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />

        <span>US${(cart[product.id] * product.price).toFixed(2)}</span>

        <button
          className="animated-button"
          onClick={() => onItemRemove(product)}
        >
          remove
        </button>
      </div>
    ));
  return <div className="CardList">{output}</div>;
}
