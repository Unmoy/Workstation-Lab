import React, { useEffect } from "react";
import "./Shop.css";
import StoreProducts from "../StoreProducts/StoreProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const Shop = () => {
  const items = useSelector((state) => {
    return state.getProducts.productLists;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="store_container">
      <h3>Computers</h3>
      <div className="main_content">
        {items?.map((pd) => (
          <StoreProducts key={pd._id} pd={pd}></StoreProducts>
        ))}
      </div>
    </div>
  );
};

export default Shop;
