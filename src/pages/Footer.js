import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About</h4>
            <p>
            Our bookstore offers a wide range of books for every taste and preference. We proudly present books from the best authors and publishers.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contacts</h4>
            <p>
            Address: st. Pushkina, 10, Moscow
            </p>
            <p>
            Phone: +996 500978933
            </p>
            <p>
            Email: info@bookstore.ru
            </p>
          </div>
          <div className="col-md-4">
            <h4>Subscribe to news</h4>
            <p>
            Subscribe to our newsletter and promotions to be the first to receive the best offers and novelties of the book world.
            </p>
            <form>
              <input type="email" placeholder="Введите ваш e-mail" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>© 2023 Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
