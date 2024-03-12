import "./App.css";
import Nav from "../src/ecommerce/Nav";
import Footer from "./ecommerce/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Login from "./pages/Login";
import Addtocart from "./pages/Addtocart";
import { useState } from "react";
import TestForm from "./pages/TestForm";


function App() {

   const [addcart,setAddcart] = useState(0)
  return (
    <>
      <BrowserRouter>

        <Nav  addcart={addcart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women/" element={<Women />} />
          <Route path="/Men/:id" element={<Men addcart={addcart} setAddcart={setAddcart}/>} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<Login />} />
           <Route path="/addtocart" element={<Addtocart/>}/> 
          <Route path="/t" element={<TestForm/>}/>
        </Routes>

        <Footer />
       
      </BrowserRouter>
    </>
  );
}

export default App;
