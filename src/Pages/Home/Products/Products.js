import React from 'react';
import { useHistory } from 'react-router';
import './Products.css';

const Products = ({ product }) => {
    const history = useHistory();
    const { _id, name, price, details, img } = product;

    const handleClick = id => {
        history.push(`/placeOrder/${id}`);
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card food-card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <p><b>${price} - Delivery Fee</b></p>
                    <button onClick={() => handleClick(_id)} className="btn button">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;