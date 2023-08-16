import React from "react";
import "./Homepage.css";
import Food from "./mvp-banner.png";
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
        <br />

        <img id="img-object" src={Food} alt="Food" />
      </div>
    </>
  );
};
export default Home;
