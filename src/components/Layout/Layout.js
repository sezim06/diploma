import Nav from "../Nav/Nav";
import logo from "../../assets/logo.png";
import "./Layout.css";

export default function Layout(props) {
  return(
    <div className="Layout">
    <header>
      <img className="logo" src={logo} alt="logo" />
      <Nav />
    </header>
    <aside>
      <nav>NAV COTEGORIES</nav>
    </aside>
    <main>{props.children}</main>
    <footer>
      FOOTER
    </footer>
  </div>
  )
}