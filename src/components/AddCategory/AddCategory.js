import { useContext, useState } from "react";
import "./AddCategory.css";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function AddCategory() {


  const [category, setCategory] = useState("");
  const { user } = useContext(AppContext)
  if (!user || !user.isAdmin) {
    return null
  }
  function onChangeCategroy(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {
      alert(
        "Pleace provide a category name with minimum length of 5 characters"
      );

      return;
    }
    addDoc(categoryCollection, {
      name: name,
      slug: name.replaceAll(" ", "-").toLocaleLowerCase(),
    }).then(() => {
      setCategory("");
    });
  }

  return (
    <div className="AddCategory">
      <input
        type="text"
        size={15}
        placeholder="Category name"
        value={category}
        onChange={onChangeCategroy}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}
