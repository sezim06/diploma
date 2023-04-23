import React, { useContext } from "react";
import "./ProductsList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductsList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter ((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="Product">
        <img src={product.picture} alt={product.name} className="imageProduct" />
        <NavLink to={"/product/" + product.slug}>{product.name}</NavLink>
        <span>US${product.price}</span>
        <AddToCart product={product} />
      </div>
    ));

  return <div className="ProductsList">{output}</div>;
}
