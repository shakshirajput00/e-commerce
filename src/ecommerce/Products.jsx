import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));


  const [apiData, setApiData] = useState();
  const navigate = useNavigate();
   
  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[token,navigate])
  let url = "https://fakestoreapi.com/products";
  const getapi = async (api) => {
    try {
      const data = await fetch(api);
      const res = await data.json();
      console.log(res);
      setApiData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getapi(url);
  }, []);
  console.log(apiData);

  const navHandle = (index) => {
    navigate(`/Men/${index}`);
  };
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", backgroundColor:"white" }}>
        {apiData?.map((item, index) => {
          return (
            <div className="cardss  mt-4" onClick={()=>navHandle(index+1)}>
              <div className="main1 mt-2">
                <img src={item.image} class="card-img-top" alt="..." />
              </div>
              <div className="card-text mt-2 p-3">
                <h3>{item.category}</h3>
                <p style={{ font: "15px" }}>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
