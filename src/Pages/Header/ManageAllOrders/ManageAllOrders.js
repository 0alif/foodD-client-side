import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Home/Navigation/Navigation";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dry-beyond-04598.herokuapp.com/orders")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://dry-beyond-04598.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete successfully!");
            // const remainingData = data.filter(user => user._id !== id);
            // setData(remainingData);
          }
        });
    }
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="row g-4  m-0">
        {data.length > 0 ? (
          <h2 className="order-text">All orders</h2>
        ) : (
          <h2 className="order-text">No order yet</h2>
        )}
        {data.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={product._id}>
            <div className="item-card App">
              <img className="img-fluid" src={product.item.img} alt="" />
              <h3>{product.item.name}</h3>
              <p>{product.item.details}</p>
              <p>
                <b>${product.item.price} - Delivery Fee</b>
              </p>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn delete-btn"
              >
                Cancel order
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageAllOrders;
