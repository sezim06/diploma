import Nav from "../Nav/Nav";

export default function Layout(props) {
  return(
    <div className="Layout">
    <header>
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