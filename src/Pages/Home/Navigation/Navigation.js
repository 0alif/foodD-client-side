import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navigation-brand me-4" to='/'>FoodD.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/home' className="navigation">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='myOrders' className="navigation">My Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='manageAllOrders' className="navigation">Manage All Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='aboutUs' className="navigation">About Us</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <li className="nav-item list">
                                <NavLink to='login' className="navigation me-4">Login</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;