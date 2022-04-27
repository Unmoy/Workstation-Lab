import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Store/Shop";
// import Order from "./components/Order/Order";
import Navbar from "./components/Navbar/Navbar";
import BackDrop from "./components/BackDrop/BackDrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import { useState } from "react";
import CartScreen from "./components/CartScreen/CartScreen";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <Router>
      <Navbar
        click={() => {
          setToggle(true);
        }}
      />
      {/* 
      <BackDrop
        show={toggle}
        click={() => {
          setToggle(false);
        }}
      />
      <SideDrawer show={toggle} /> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/cart">
          <CartScreen></CartScreen>
        </Route>
        <Route path="/productscreen/:id">
          <ProductScreen></ProductScreen>
        </Route>
        {/* <Route path="/orders/:id">
          <Order></Order>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
