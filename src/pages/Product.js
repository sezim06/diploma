import { useMatch } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../App"
import NotFound from "./NotFound";

export default function Product() {
  const { params } = useMatch("/products/:slug")
  const { products } = useContext(AppContext)

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }



  return(
    <div className="Product">
      <h1>{product.name}</h1>
      <img src={products.picture} alt="product.name" />
      <span>{product.price}</span>
    </div>
  )
}