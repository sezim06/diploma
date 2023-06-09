import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "./Pages.css"

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      
      <div className="LinkInProcuct">
         <img className="ProductImg" src={product.picture} alt={product.name} />

     <p className="discription">{product.discription}</p>
     

      </div>
     
      <span className="price">{product.price} som</span>{" "} 
    </div>
  );
}
