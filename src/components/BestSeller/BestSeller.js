import React from "react";
import "./BestSeller.css";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
const BestSeller = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="carousel_wrapper">
      <h1>Shop Best Sellers</h1>
      <Carousel breakPoints={breakPoints} showArrows={false}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </div>
  );
};

export default BestSeller;
