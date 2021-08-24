import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./StoreProducts.css";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

const StoreProducts = ({ pd }) => {
  const { name, price, category, imageUrl, _id } = pd;
  const history = useHistory();
  const handleClick = () => {
    const url = `/product/${_id}`;
    history.push(url);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top product-img" src={imageUrl} alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: $ {price}.00</p>
        <p className="card-text">{category}</p>
        <Button className="order-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default StoreProducts;
