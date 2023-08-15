import React from "react";
import "./Homepage.css";
import Food from "./adv-aseets/food-2.png";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 id="ilkyazı">Teknolojik Yemekler</h1>
        <p>KOD ACIKTIRIR </p>
        <p>PİZZA DOYURUR</p>
        <Button color="warning">
          {/* ACIKTIM <Link to="/orderpage.js"></Link> */}
        </Button>

        <div className="img-object">
          <img src={Food} alt="Food" />
        </div>
      </div>
    </>
  );
};
export default Home;
