import React from 'react';
import './Items.css';

const Items = ({ product }) => {
    const { name, img, price, details } = product.item;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete successfully!');
                    }
                })
        }
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="">
                <div className="item-card App">
                    <img className="img-fluid" src={img} alt="" />
                    <h3>{name}</h3>
                    <p>{details}</p>
                    <p><b>${price} - Delivery Fee</b></p>
                    <button onClick={() => handleDelete(product._id)} className="btn delete-btn">Delete order</button>
                </div>
            </div>
        </div>
    );
};

export default Items;