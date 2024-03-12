import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addtocart = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();



  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[token,navigate])
  const [info, setInfo] = useState();

  const url = "https://fakestoreapi.com/products?limit=5";
  const getdataa = async (Newdata) => {
    try {
      const data = await fetch(Newdata);
      const res = await data.json();
      console.log(res);
      setInfo(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdataa(url);
  }, []);

  return (
    <>
       

      <div className="cart1 m-5 p-5">
        <div className="products">
          <h1>CART </h1>
          <table className="table">
            <thead>
              <tr>
                <th>product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            {info?.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "50px", width: "50px" }}
                          alt=""
                        />
                      </td>
                      <td>{item.title.substr(0, 13)}...</td>
                      <td>{item.price}</td>
                      <td>Null</td>
                      <td>{item.price}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>

        </div>
        {/* <div className="totals mt-5 m-5">
          <table className="main-table1">
            <thead>
              <tr className="t-row">
                <th>
                  <h3>cart totals </h3>
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="t-row">
                <th>Subtotal</th>
                <th>$150.00</th>
              </tr>
            </thead>
            <thead>
              <tr className="t-row">
                <th>Total</th>
                <th>$150.00</th>
              </tr>
              <th>
              
                <button className="checkout ms-4 "><h1>CHECKOUT</h1></button>
              </th>
            </thead>
              <tr></tr>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Addtocart;
