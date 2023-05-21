import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  const output = categories.map((category) => (
    <li key={category.id}>
      <div>
        {/* <img src={category.icon} alt={category.name} className="icon" /> */}
        <NavLink className="fromLeft" to={`/categories/${category.slug}`}>{category.name}</NavLink>
        <DeleteCategory category={category} />
      </div>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>
        <span>B</span>est Ever Book Lists
      </h3>

      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
