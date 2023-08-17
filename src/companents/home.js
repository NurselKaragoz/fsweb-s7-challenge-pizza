import React from "react";
import "./Homepage.css";
import Food from "./food-2.png";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 id="ilkyazı">
          <strong>Teknolojik Yemekler</strong>
        </h1>
        <p id="text-tanıtım">KOD ACIKTIRIR </p>
        <p id="text-tanıtım">PİZZA DOYURUR</p>

        <Link to="/pizza" className="link">
          <Button id="order-pizza" color="warning">
            ACIKTIM
          </Button>
        </Link>

        <br />

        <img id="img-object" src={Food} alt="Food" />
      </div>
    </>
  );
};
export default Home;
