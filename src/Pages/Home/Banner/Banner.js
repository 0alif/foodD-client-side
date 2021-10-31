import React from "react";
import hero from "../../../images/hero.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero-img">
        <div className="hero-text">
          <h1>Your Favorite Food, on the way!</h1>
          <p>
            The answer is easy. Food is universal. Everybody has to eat! It’s as
            simple as that. So people want to find tasty, healthy food, the best
            places to eat, etc. It’s no wonder that everybody’s talking about
            food.
          </p>
          <div class="d-flex">
            <input
              class="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn submit-btn" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <img className="img-fluid" src={hero} alt="" /> */
}

{
  /* <div className="hero-text">
          <h1>Your Favorite Food, on the way!</h1>
          <p>
            The answer is easy. Food is universal. Everybody has to eat! It’s as
            simple as that. So people want to find tasty, healthy food, the best
            places to eat, etc. It’s no wonder that everybody’s talking about
            food.
          </p>
        </div> */
}
