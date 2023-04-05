import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />  
          <Route path="/about" element={<h1>About</h1>} /> 
          <Route path="/contact" element={<h1>Contact</h1>} /> 
          <Route path="/delivery" element={<h1>Delivery</h1>} />  

        </Routes>
       </Layout>
    </div>
  );
}   

export default App;
