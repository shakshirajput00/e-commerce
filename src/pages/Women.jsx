import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import braclet from "../assets/product-braclet.jpg"


const Women = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token, navigate])
  return (
    <div className='Edit p-4'>
      <img className='braclet' src={braclet} alt="" />
      <h1>Women Page </h1>
      <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.

        Showing 1–12 of 17 results
        Default sorting
      </p>

    </div>
  )
}

export default Women
