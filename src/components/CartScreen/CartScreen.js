import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import "./CartScreen.css";

const CartScreen = () => {
  const cartProduct = useSelector((state) => {
    console.log(state.cart.cartItems);
    return state.cart.cartItems;
  });
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartProduct.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/shop">Go Back</Link>
            </div>
          ) : (
            cartProduct.map((item) => <CartItems key={item.id} item={item} />)
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal 0 items</p>
            <p>Total price</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
