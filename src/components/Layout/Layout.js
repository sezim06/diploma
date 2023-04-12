import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Footer from "../../pages/Footer";

export default function Layout(props) {
  return(
    <div className="Layout">
    <header>
      <Logo/>
      <Nav />
    </header>
    <aside>
     <CategoryList/>  
    </aside>
    <main>{props.children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}