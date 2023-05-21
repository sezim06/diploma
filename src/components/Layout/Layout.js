import { useState } from "react";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Drawer from "../Drawer/Drawer";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Logo from "../ui/Logo/Logo";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="right">
          <CartLink />
          <Auth />
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
