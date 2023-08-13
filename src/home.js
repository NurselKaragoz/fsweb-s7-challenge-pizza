import React from "react";
import "./Homepage.css";
import Food from "./adv-aseets/mvp-banner.png";
console.log(Food);
const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Teknolojik Yemekler</h1>
        <h1>KOD ACIKTIRIR </h1>
        <h1>PİZZA DOYURUR</h1>

        <img src={Food} alt="Food" />
      </div>
    </>
  );
};
export default Home;
