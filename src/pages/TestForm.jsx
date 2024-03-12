import React, { useState } from "react";

const TestForm = () => {
  const [data, setData] =  useState({
    name: "",
    password: "",
  });

  const [xyz,setxyz] = useState()

  const handleinput = (e) => {
    const sName = e.target.name
    const value = e.target.value
    setData({...data,[sName]:value})
  };
  const handleForm = (e) => {
    e.preventDefault();
  setxyz(data)

    // alert("i am running");

  };
   console.log( "sdfghjkl;",xyz);
  console.log(data);
  return (
    <>
      <h1>Testing</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleinput}
        />

        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleinput}
        />
        <button type="submit">click Me</button>
      </form>
    </>
  );
};

export default TestForm;
