import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Home/Navigation/Navigation";
import add from "../../images/add.png";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://dry-beyond-04598.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Service added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="row container my-5">
        <div className="col-sm-12 col-md-6 add-service">
          <h2>Add a service</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              type="text"
              {...register("name", { required: true })}
            />
            <br />
            <input
              placeholder="Details"
              type="text"
              {...register("details", { required: true })}
            />
            <br />
            <input
              placeholder="Price"
              type="number"
              {...register("price", { required: true })}
            />
            <br />
            <input className="add-btn btn" type="submit" value="Add" />
          </form>
        </div>
        <div className="col-sm-12 col-md-6">
          <img className="img-fluid" src={add} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddService;
