import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";
import { useContext } from "react";
import { AppContext } from "../App";
import ProductsList from "../components/Products/ProductsList";
import "./Pages.css"

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const { categories } = useContext(AppContext);

  const category = categories.find((category) => category.slug === params.slug);
  if (!category) {
    return <NotFound />;
  }
  return (
    <div className="Category">
      <h1>{category.name}</h1>
      <ProductsList category={category} />
    </div>
  );
}
