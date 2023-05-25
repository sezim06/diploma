import { NavLink } from "react-router-dom";
import "./Nav.css";
import Search from "../Search/Search";
export default function Nav() {
  let menuBtn = document.querySelectorAll(".NavItem a");
  let menu = document.querySelector(".Drawer");
  menuBtn.forEach((el) => {
    el.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
  return (
    <div className="Nav">
      <nav className="main-nav">
        <ul>
          <Search />
          <li className="NavItem">
            <NavLink className="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/books">Books</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/delivery">Delivery</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
