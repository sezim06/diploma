import { NavLink } from "react-router-dom";
import "./CategoryList.css"
export default function CategoryList(){
  const categories = [
    {id: 1, name: "Fantasy", slug: "fantasy" },
    {id: 2, name: "Chick lit", slug: "chick-lit" },
    {id: 3, name: "Romance",slug: "romance" },
    {id: 4, name: "Classic novel",slug: "classic-novel" },

  ];
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
    </li>
  ));
    



  return(
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  )
}