import React from "react";
import Products from "../ecommerce/Products";
import "../ecommerce/Style.css";
import Backimg from "../assets/home-new-bg-free-img.jpg";

const Home = () => {
  return (
    <><div>
 
      <img
        className="backimg" style={{width:"100%"}}
        src={Backimg}
        alt=""
        /> 
           <div className="feature">
        <h1>Featured Products</h1>
        <div className="hori-row">
          <hr />
        </div>
      </div>  

      <Products />
        </div>
    </>
  );
};

export default Home;
