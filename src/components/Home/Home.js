import React from "react";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import HomeMain from "../HomeMain/HomeMain";
import Inspiration from "../Inspiration/Inspiration";
import Newsletter from "../Newsletter/Newsletter";
import Onsale from "../Onsale/Onsale";

const Home = () => {
  return (
    <>
      <HomeMain></HomeMain>
      <Onsale></Onsale>
      <Features></Features>
      <Inspiration></Inspiration>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default Home;
