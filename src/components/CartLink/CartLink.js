import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import cartt from "./cart.png"
export default function CartLink() {
  const { cart } = useContext(AppContext);
  const total = Object.values(cart).reduce((ass, num) => ass + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
    <img src={cartt} alt="cart" width={30} />
       
        {total}
      </NavLink>
    </div>
  );
}
