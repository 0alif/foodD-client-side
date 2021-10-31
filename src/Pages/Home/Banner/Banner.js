import React from "react";
import hero from "../../../images/hero.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero-img">
        <img className="img-fluid" src={hero} alt="" />
      </div>
      <div className="hero-text">
        <h1>Your Favorite Food, on the way!</h1>
        <p>
          The answer is easy. Food is universal. Everybody has to eat! It’s as
          simple as that. So people want to find tasty, healthy food, the best
          places to eat, etc. It’s no wonder that everybody’s talking about
          food.
        </p>
      </div>
    </div>
  );
};

export default Banner;
