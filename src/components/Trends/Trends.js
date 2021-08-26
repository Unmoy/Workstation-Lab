import React from "react";
import "./Trends.css";
import hp from "../../images/headphone.png";
const Trends = () => {
  return (
    <section style={{ backgroundColor: "#191b2a" }}>
      <div className="trend_container">
        <div className="trend_image">
          <img src={hp} alt="" />
        </div>
        <div className="trend_info">
          <div className="trend_details">
            <h6>ALL NEW TREND HEADPHONES</h6>
            <h1>
              Top rated <br /> headphones!
            </h1>
            <p>Doing it all, in all new ways.</p>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
