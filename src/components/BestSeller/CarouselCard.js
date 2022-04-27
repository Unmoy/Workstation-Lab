import React from "react";
import "./CarouselCard.css";
import { useHistory } from "react-router";
const CarouselCard = ({ review }) => {
  const { title, price, imageUrl, _id } = review;
  const history = useHistory();
  const handleClick = () => {
    const url = `/productscreen/${_id}`;
    history.push(url);
  };
  return (
    <div className="carousel_card">
      <div className="imgBox">
        <img src={imageUrl} alt="mousecorsair" className="mouse" />
      </div>

      <div className="contentBox">
        <h3>{title}</h3>
        <h2 className="price">
          € {price}.<small>99</small>
        </h2>
        <div className="buy" onClick={handleClick}>
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
