import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../Home/Navigation/Navigation";
import Footer from "../Home/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { name, img, price, details } = product;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.item = product;
    // add order in db
    fetch("https://dry-beyond-04598.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://dry-beyond-04598.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="row m-0">
        <div className="col-sm-12 col-md-6">
          <div className="order-card container">
            <img className="img-fluid" src={img} alt="" />
            <div>
              <h5>{name}</h5>
              <p>{details}</p>
              <p>
                <b>${price} - Delivery Fee</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="container">
            <h4 className="order-text">Place your order</h4>
            <form className="handle-from" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder=" Name"
              />
              <br />
              <input type="email" {...register("email")} placeholder=" Email" />
              <br />
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder=" Address"
              />
              <br />
              <input
                type="text"
                {...register("city", { required: true })}
                placeholder=" City"
              />
              <br />
              <input
                type="submit"
                value="Place order"
                className="place-btn btn"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
