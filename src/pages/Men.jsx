import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Men = ({ addcart, setAddcart }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(token)
    if(!token){
      navigate("/login")
    }
  },[token, navigate])

  const [apiData, setApiData] = useState([]);
  const params = useParams();

  let url = `https://fakestoreapi.com/products/${params.id}`;
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
  }, [url]);
  console.log(apiData);

  const handlecart = () => {
    setAddcart(addcart + 1);
  };

  return (
    <div>
      <h1 style={{ marginLeft: "48%" }}> MEN </h1>
      <div className="Edit">
        {
          <img
            style={{ height: "200px", width: "150px" }}
            src={apiData?.image}
            alt=""
          />
        }
        <h5>{apiData?.category}</h5>
        <h5>{apiData?.price}</h5>

        <button onClick={handlecart} className="cart">
          ADD To CART
        </button>
      </div>
    </div>
  );
};

export default Men;
