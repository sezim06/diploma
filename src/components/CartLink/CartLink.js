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
    
       
        {total}
      </NavLink>
    </div>
  );
}
