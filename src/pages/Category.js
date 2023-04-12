import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category(){
  const {params} = useMatch("/categories/:slug");
  
  const categories = [
    {id: 1, name: "Fantasy", slug: "fantasy" },
    {id: 2, name: "Chick lit", slug: "chick-lit" },
    {id: 3, name: "Romance",slug: "romance" },
    {id: 4, name: "Classic novel",slug: "classic-novel" },

  ];
  const category  = categories.find(
    (category) => category.slug === params.slug
  );
  if (!category) {
    return<NotFound/>
  }
  return(
    <div>
      <h1>{category.name}</h1>
      
    </div>
  )
}