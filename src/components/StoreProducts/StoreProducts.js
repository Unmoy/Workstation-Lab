import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./StoreProducts.css";
import { useHistory } from "react-router";

const StoreProducts = ({ pd }) => {
  const { title, price, category, description, imageUrl, _id } = pd;
  const history = useHistory();
  const handleClick = () => {
    const url = `/productscreen/${_id}`;
    history.push(url);
  };
  return (
    <div className="card_wrapper">
      <div className="card_image">
        <img src={imageUrl} alt="thumb" />
      </div>
      <div className="card_content">
        <p>{title}</p>
        <p>${price}</p>
        <div className="cta" onClick={handleClick}>
          View Details
        </div>
      </div>
    </div>
  );
};

export default StoreProducts;
