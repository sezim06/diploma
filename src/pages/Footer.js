import React from "react";
import "./Pages.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About</h4>
            <p>
              Our bookstore offers a wide range of books for every taste and
              preference. We proudly present books from the best authors and
              publishers.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contacts</h4>
            <p>
              Address:{" "}
              <a href="https://yandex.ru/maps/213/moscow/house/ulitsa_pushkina_10/Z04YdAFhSkQPQFtvfXpydHplZA==/?ll=37.261318%2C55.635660&z=16">
                {" "}
                st. Pushkina, 10, Moscow
              </a>
            </p>
            <p>
              Phone: <span>+996 500978933</span>
            </p>
            <p>
              Email:{" "}
              <a href="https://mail.google.com/mail/u/0/#inbo">
                info@bookstore.ru
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h4>Subscribe to news</h4>
            <p>
              Subscribe to our newsletter and promotions to be the first to
              receive the best offers and novelties of the book world.
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
       <div className="Twiter">
       <a
          className="twitter"
          target="_top"
          href="https://twitter.com/sezimalias16432"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 72 72"
          >
            <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
          </svg>
        </a>
       </div>
       <div className="YouTube">
       <a
          href="https://www.youtube.com/watch?v=iwt0qSAynqY"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
          class="social-button footer-social-item social-link-youtube"
        >
          <span class="kadence-svg-iconset">
            <svg
              class="kadence-svg-icon kadence-youtube-svg"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 28 28"
            >
              <title>YouTube</title>
              <path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
            </svg>
          </span>
        </a>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
