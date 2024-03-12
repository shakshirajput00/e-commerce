import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Form } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
   const location = useLocation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [apidata, setApidata] = useState();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleForm = async (e) => {
    e.preventDefault();

    if (data.email === "") {
      return alert("Please enter your email");
    } else if (data.password === "") {
      return alert("Please enter your password");
    }
    const api = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    const apiResponse = await api.json();
    localStorage.setItem("token", apiResponse.token);
    navigate("/");
    console.log(apiResponse);
    setData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [location.pathname]);

  console.log(apidata);
  console.log(data);

  return (
    <div>
      {/* <h1>LOGIN FORM</h1> */}
      <div className="Login-form p-4 ">
        <h1>LOGIN</h1>

        <form onSubmit={handleForm}>
          <div className="mb-3">
            <label for="exampleInputEmail1"  className="form-label" >
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" >
              Password
            </label>
            <input
              value={data.password}
              name="password"
              type="password"
              onChange={handleInput}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit " className="btn btn-danger ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
