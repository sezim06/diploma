
import { NavLink } from "react-router-dom";
import "./CategoryList.css"
import { useContext } from "react";
import { AppContext } from "../../App";

export default function CategoryList() {
 const { categories } = useContext(AppContext);
const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
    </li>
  )); 

  return (
    <div className="CategoryList">
      <h3><span>C</span>ategories</h3>
      <ul>{output}</ul>
    </div>
  );
}
