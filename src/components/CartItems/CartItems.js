import "./CartItems.css";
import { Link } from "react-router-dom";
const CartItems = ({ item }) => {
  console.log(item);
  const { imageUrl, name, price, id } = item;
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={imageUrl} alt="" />
      </div>
      <Link to={`/product/${id}`} className="cartItem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__price">${price}</p>
      <select className="cartItem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartItem__deleteBtn">
        X<i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItems;
