import React from "react";
import "./Homepage.css";
import Food from "./food-2.png";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Order from "./pizza";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 id="ilkyazı">Teknolojik Yemekler</h1>
        <p>KOD ACIKTIRIR </p>
        <p>PİZZA DOYURUR</p>

        <Button id="order-pizza" color="warning">
          <Link to="/pizza" className="link">
            ACIKTIM
          </Link>
        </Button>

        <div className="img-object">
          <img src={Food} alt="Food" />
        </div>
      </div>
    </>
  );
};
export default Home;
