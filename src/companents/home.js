import React from "react";
import "./Homepage.css";
import Food from "./mvp-banner.png";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 id="ilkyazı">Teknolojik Yemekler</h1>
        <p>KOD ACIKTIRIR </p>
        <p>PİZZA DOYURUR</p>

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
