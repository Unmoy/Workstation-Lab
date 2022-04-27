import React from "react";
import lappy from "../../images/lappy.png";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <section style={{ background: "#F2F4FF" }}>
      <div className="home_container">
        <div className="home_info">
          <div className="home_text">
            <h1>MINIMAL & SIMPLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              harum magni! Ducimus maxime sapiente optio impedit at ut amet
              dignissimos.
            </p>
          </div>
          <div className="home_button">
            <button class="btn1">GET SERVICE</button>
            <button class="btn2">READ MORE</button>
          </div>
        </div>
        <div className="home_image">
          <img src={lappy} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
