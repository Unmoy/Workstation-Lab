import React, { useEffect } from "react";
import "./BestSeller.css";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
const BestSeller = () => {
  const items = useSelector((state) => {
    return state.getProducts.productLists;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="carousel_wrapper">
      <h1>Shop Best Sellers</h1>
      <Carousel breakPoints={breakPoints} showArrows={true}>
        {items?.map((review, index) => {
          return <CarouselCard key={index} review={review} />;
        })}
      </Carousel>
    </div>
  );
};

export default BestSeller;
