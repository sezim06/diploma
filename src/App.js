import "./App.css"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}   

export default App;
