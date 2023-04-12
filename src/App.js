import "./App.css"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection } from "./firebase";

export const AppContext = createContext({
  categories: [],
});


function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categoryCollection)
    .then(({docs}) => {
      setCategories(
        docs.map(doc => ({
          ...doc.data(),
          id:doc.id
        }))
      )
    });
  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ categories }} >
        <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/books" element={<Books />} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/categories/:slug" element={<Category/>}/> 

          <Route path="*" element={<NotFound/>}/>


        </Routes>

        </Layout>
      

      </AppContext.Provider>

       
    </div>
  );
}   

export default App;
