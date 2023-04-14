import React, { useContext } from "react";
import "./ProductsList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductsList({category}) {
  const { products } = useContext(AppContext);

  const output = products.map(product => product.category === category.id) 
    .map(product => (
      <div key={product.id} className="Product">
      <img src={product.picture} alt={product.name}/>
      <NavLink to={'/product' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} som</span>
    </div>
    ));
    
  

  return (
    <div className="ProductsList">
      {output}
    </div>
  )
}
