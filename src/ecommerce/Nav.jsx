import React, { useEffect, useState } from "react";
import dnk from "../assets/logo1-free-img.png";
import { Link, useLocation } from "react-router-dom";
import "../ecommerce/Style.css";

const Nav = ({ addcart }) => {
  const [tokenData, setTokenData] = useState();
  const location = useLocation();
  const handlelogout = () => {
    setTokenData(null);
    localStorage.clear();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenData(token);
  }, [location.pathname]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img classNameName="dnk" src={dnk} alt="" />
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link className="text-white text-decoration-none" to="/">
                  EVERYTHING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white text-decoration-none" to="/women">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item n-head">
                <Link className="text-white text-decoration-none" to="/Men/id">
                  MEN{" "}
                </Link>
              </li>
              <li className="nav-item n-head">
                <Link className="text-white text-decoration-none" to="/Men/id">
                  test{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white text-decoration-none" to="/accessories">
                  ACCESSORIES
                </Link>
              </li>
            </ul>
            <div classNameN="span-text  ">
              <span style={{ margin: "15px" }}>ABOUT</span>
              <span>CONTACT US</span>
            </div>
            <div classNameName="price">
              <span style={{ margin: "15px" }}>$ 0.00</span>
            </div>
            <div classNameName="bag" style={{ margin: "15px" }}>
              <Link to={"/addtocart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-suitcase-lg-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
                </svg>
              </Link>
            </div>
            {tokenData ? (
              <div onClick={() => handlelogout()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-person-slash" viewBox="0 0 16 16">
                  <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <div classNameName="person">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="white"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>
              </Link>
            )}
            <div className="numbers">{addcart}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
