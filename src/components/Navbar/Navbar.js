import React from "react";
import "./Navar.css";
import { MenuList } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const cart = useSelector((state) => {
    return state.cart;
  });
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar_logo">workstation LAB</h1>
      <div className="menu_icon" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <div>
        <ul className={clicked ? "nav_menu active" : "nav_menu"}>
          {MenuList.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav_link nav_link_ltr" to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="count_section">
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="nav_cart_icon"
          ></FontAwesomeIcon>
          <span className="cart_count">{getCartCount()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
