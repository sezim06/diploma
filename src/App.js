import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/delivery" element={<Delivery/>} />  

        </Routes>
       </Layout>
    </div>
  );
}   

export default App;
