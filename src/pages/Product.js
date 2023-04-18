import { useMatch } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "./Product.css"

export default function Product() {
  const { params } = useMatch("/product/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img src={product.picture} alt={product.name} />
      <span>{product.price}</span>
    </div>
  );
}
