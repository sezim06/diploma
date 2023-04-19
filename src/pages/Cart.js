import CartList from "../components/CardList/CardList";
import OrderForm from "../components/OrderForm/OrderForm";
import"./Pages.css"
export default function Cart(){
  return(<div className="Cart">
    <h1><span>P</span>urchases</h1>

    <CartList/>
    <OrderForm />
  </div>)
}