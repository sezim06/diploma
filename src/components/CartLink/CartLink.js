import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
export default function CartLink() {
  const { cart } = useContext(AppContext);
  const total = Object.values(cart).reduce((ass, num) => ass + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-cart-100-most-used-icons-flaticons-lineal-color-flat-icons.svg"
          alt="cart"
          className="cart"
        />
        {total}
      </NavLink>
    </div>
  );
}
