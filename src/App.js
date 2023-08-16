import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./companents/home";
import Order from "./companents/pizza";
import Onay from "./companents/onay";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza" component={Order} />
        <Route path="/" component={Home} />
        <Route path="/succes" component={Onay} />
      </Switch>
    </>
  );
};
export default App;
