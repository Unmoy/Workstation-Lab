import React, { useEffect, useState } from "react";
import "./ProductScreen.css";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getProductsDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { qty, setQty } = useState(1);
  const data = useSelector((state) => {
    return state.getProductDetails.singleProductDetail;
  });

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);
  const { name, price, category, description, imageUrl } = data;

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
    history.push("/cart");
  };
  return (
    <section>
      <div className="container">
        <div className="productImage_container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="column">
          <h1>{name}</h1>
          <p>{category}</p>
          <p className="line">by Umbrella Design</p>
          <p>{description?.substring(0, 50)}...</p>
          <span className="checked">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <p>
            <span className="checked">(5.0)</span> review based on 250
          </p>
          <p className="review">
            <u>Submit Review</u>
          </p>
          <h1 style={{ color: "red" }}>${price}</h1>
          <p>
            <FontAwesomeIcon icon={faClock} />
            Dispatched in 7 working days
          </p>
          <p>
            Qty:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <button className="btn1" onClick={addToCartHandler}>
            ADD TO CART
          </button>
          <button className="btn2">ADD TO WISHLIST</button>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
