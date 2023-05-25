import { NavLink } from "react-router-dom"
import "./Pages.css"
export default function Contact(){
  return(
    <div className="Contacts">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any inquiries or feedback.</p>
    
    <h2>Email:</h2>
    <p>Email us at <a href="https://mail.google.com/mail/u/0/#inbox">mail.google.com/Aliaskarova-Sezim/BookStore</a>.</p>
    
    <h2>Phone:</h2>
      <NavLink  to="https://wa.me/+996500978933">
        <p> +996 (500) 978-933.</p>
      </NavLink>
    
    
    <h2>Address:</h2>
    <p>
              Address:{" "}
              <a href="https://yandex.ru/maps/213/moscow/house/ulitsa_pushkina_10/Z04YdAFhSkQPQFtvfXpydHplZA==/?ll=37.261318%2C55.635660&z=16">
                {" "}
                st. Pushkina, 10, Moscow
              </a>
            </p>
   
  </div>
  )
}