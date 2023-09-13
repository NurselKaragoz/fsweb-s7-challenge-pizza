import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./companents/home";
import Order from "./companents/pizza";
import Onay from "./companents/onay";
const [orderData, setOrderData] = useState();

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza" exact component={Order} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/succes" exact component={Onay} />
        <Route path="/"></Route>
      </Switch>
    </>
  );
};
export default App;
