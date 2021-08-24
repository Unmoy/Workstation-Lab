import React, { useEffect } from "react";
import "./Shop.css";
import StoreProducts from "../StoreProducts/StoreProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const Shop = () => {
  const data = useSelector((state) => {
    // console.log(state.getProducts.productLists);
    return state.getProducts.productLists;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div style={{ background: "#e7f3f1" }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {data.map((pd) => (
            <StoreProducts key={pd.id} pd={pd}></StoreProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
