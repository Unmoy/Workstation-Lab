import "./CartItems.css";
import { Link } from "react-router-dom";

const CartItems = ({ removeHandler, product, quantityChangeHandler }) => {
  // console.log(product);
  console.log("5", product[0]);

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={product.imageUrl} alt="cartitem__image" />
      </div>
      <Link to={`/productscreen/${product.id}`} className="cartItem__name">
        <p>{product.title}</p>
      </Link>
      <p className="cartitem__price">${product.price}</p>
      {/* <p>{product.qty}</p> */}
      <select
        className="cartItem__select"
        value={product.qty}
        onChange={(e) => quantityChangeHandler(product.id, e.target.value)}
      >
        {[...Array(product.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(product.id)}
      >
        X
      </button>
    </div>
  );
};

export default CartItems;
