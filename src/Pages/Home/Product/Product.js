import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Products from '../Products/Products';

const Product = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    // show spinner
    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>
    }

    return (
        <div className="row g-5 m-0">
            {
                products.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Product;