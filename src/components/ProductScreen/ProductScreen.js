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
  // console.log(id);
  const dispatch = useDispatch();
  const history = useHistory();
  const [qty, setQty] = useState(1);
  const data = useSelector((state) => {
    return state.getProductDetails.singleProductDetail;
  });
  // console.log(data);
  const { title, category, description, imageUrl, price, countInStock } = data;
  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
    history.push("/cart");
  };
  return (
    <div className="product_screen">
      <div className="productImage_container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="column">
        <h1>{title}</h1>
        <p className="product_category">{category}</p>
        <h1 className="product_price">${price}.00</h1>
        <p className="product_description">{description}</p>
        <p>
          Status: {countInStock > 0 ? "In stock" : "Out of stock"}, (
          {countInStock})
        </p>
        <div className="checked">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p>
          <span>(5.0)</span>
          review based on 250
        </p>
        {/* <p className="review">
          <u>Submit Review</u>
        </p> */}
        <p>
          <FontAwesomeIcon icon={faClock} className="clock_icon" />
          Dispatched in 7 working days
        </p>
        <p>
          Quantity:
          <select
            className="quantity_selector"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          >
            {[...Array(countInStock).keys()].map((x) => (
              <option className="quantity_options" key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </p>
        <button className="btn1" onClick={addToCartHandler}>
          ADD TO CART
        </button>
        <button className="btn2">ADD TO WISHLIST</button>
      </div>
    </div>
  );
};

export default ProductScreen;
