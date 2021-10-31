import React from "react";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Home/Navigation/Navigation";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="row container">
        <div className="col-sm-12 col-md-6 about">
          <h1>About Us</h1>
          <p>FoodD is on a Mission to Transform the Way Customers Eat</p>
        </div>
        <div className="col-sm-12 col-md-6 about-text">
          <p>
            This is often accomplished with an illustration or infographic that
            presents your business model in an easy-to-digest manner, like this
            one used by Taaluma Totes that explains how they source materials
            for their products and how donations help support the country of
            origin.
          </p>
          <p>
            If transparency might strengthen your brand, your About Us page is a
            good opportunity to summarize your supply chain, how your business
            works, and relate that back to the mission that drives you.
          </p>
          <h2>Our Mission</h2>
          <p>
            A mission statement articulates a company's purpose. It announces to
            the world at large why your company exists. Every business should
            have a mission statement as a way of unifying the organization.
          </p>
        </div>
      </div>
      <div className="investors container">
        <h1>Our Investors</h1>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img
              src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/l_01.png"
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/l_04.png"
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/l_05.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
