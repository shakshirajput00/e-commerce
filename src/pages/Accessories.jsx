import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bangle from "../assets/product-bangle.jpg"

const Accessories = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();


  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[token,navigate])
  return (
    <div className='Edit p-4'>
      <img className='braclet' src={bangle} alt="" />
      <h1>Accessories</h1>
      <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.

Showing all 7 results
Default sorting
</p>
    </div>
  )
}

export default Accessories
