import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Products from "../Products/Products";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://dry-beyond-04598.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // show spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="restaurant-text">
        <h1>The Best Restaurants in Your Area</h1>
        <p>
          Nothing makes food tastier than the topping of a good deal.Our
          continuous promotions and discounts will keep your lips smacking,
          always.
        </p>
      </div>
      <div className="row g-5 m-0 mb-5">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Product;
