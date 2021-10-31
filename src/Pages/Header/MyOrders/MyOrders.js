import React, { useEffect, useState } from "react";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Home/Navigation/Navigation";
import Items from "../Items/Items";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const email = "alifhossain003@gmail.com";

  useEffect(() => {
    fetch(`https://dry-beyond-04598.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="pb-5">
        {orders.length > 0 ? (
          <h2 className="order-text">Your orders</h2>
        ) : (
          <h2 className="order-text">No order yet</h2>
        )}
        {orders.length > 0 && (
          <div className="row g-5 m-0">
            {orders.map((product) => (
              <Items key={product._id} product={product}></Items>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
