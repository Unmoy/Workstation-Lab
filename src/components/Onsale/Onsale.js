import React from "react";
import "./Onsale.css";
import cpu from "../../images/cpu.png";
import desktop from "../../images/pc desktop.png";
import keyboard from "../../images/keyboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Onsale = () => {
  return (
    <section>
      <div className="banner_container">
        <div className="banner">
          <div className="banner_text">
            <h1>Desktops</h1>
            <p>Quality Products!</p>
            <button>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </div>
          <div className="banner_image">
            <img src={desktop} alt="" />
          </div>
        </div>
        <div className="banner middle">
          <div className="banner_text middle">
            <p>Upto 30%</p>
            <h1>BIG SALE</h1>
            <p>Get your new keyboard now!</p>
            <button className="shipping_btn">FREE SHIPPING</button>
          </div>
          <div className="banner_image">
            <img src={keyboard} alt="" />
          </div>
        </div>
        <div className="banner">
          <div className="banner_text">
            <h1>Computers</h1>
            <p>Limited time offer!</p>
            <button>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </div>
          <div className="banner_image large">
            <img src={cpu} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onsale;
