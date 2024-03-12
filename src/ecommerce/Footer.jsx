import React from "react";
import dnk1 from "../assets/dnk1.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import shipping from "../assets/globe-free-img.png"
import quality from "../assets/quality-free-img.png"
import tag from "../assets/tag-free-img.png"
import lock from "../assets/lock-free-img.png"

const Footer = () => {
  const data = [
    {
      her: "For her",
      item: " Women Jean ",
      name: "tops and jeand",
      item2: "women jacket",
      item3: "heels and flat",
      item4: "women accossories",
    },
  ];
  const data2 = [
    {
      her: "For him",
      item: " men Jean ",
      name: "tops and jeand",
      item2: "men shirt",
      item3: "men shoes",
      item4: "men accossories",
    },
  ];
  return (
    <>

      <div className="shipping d-flex">
        <div className="world-wide">
          <img  className="icons" src={shipping} alt="" />
          <h5>Worldwide Shipping</h5>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="world-wide">
          <img  className="icons" src={quality} alt="" />
          <h5>Worldwide Shipping</h5>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="world-wide">
          <img  className="icons"  src={tag} alt="" />
          <h5>Worldwide Shipping</h5>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="world-wide">
          <img   className="icons" src={lock} alt="" />
          <h5>Worldwide Shipping</h5>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

      </div>



      <hr />
      <div className="container-fluid">
        <div className="main">
          <h3>
            SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
          </h3>
        </div>
        <hr />

        <div className="dnk1">
          <div className="both-men-women  ">
            <img src={dnk1} alt="" style={{ height: "30px", width: "90px" }} />
            <h3 className=" pt-4">The best look anytime, anywhere.</h3>
          </div>
          <div>
            {data.map((item) => (
              <div className="her">
                <ul style={{ listStyle: "none" }}>
                  <h3>{item.her}</h3>
                  <li>{item.item}</li>
                  <li>{item.name}</li>
                  <li> {item.item2}</li>
                  <li>{item.item3}</li>
                  <li>{item.item4}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            {data2.map((item) => (
              <div className="her">
                <ul style={{ listStyle: "none" }}>
                  <h3>{item.her}</h3>
                  <li>{item.item}</li>
                  <li>{item.name}</li>
                  <li> {item.item2}</li>
                  <li>{item.item3}</li>
                  <li>{item.item4}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="subscribe">
            <h3>Subscribe</h3>
            <div className="search">
              <form action="search1">
                <input
                  className="email"
                  type="text"
                  placeholder="Your email address"
                />
              </form>
            </div>
            <button className="subscribe1">subscribe</button>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-around ">
          <p style={{}}>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
          <div className="d-flex gap-4">
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
