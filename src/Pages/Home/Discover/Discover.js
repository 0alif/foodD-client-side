import React from 'react';
import './Discover.css';

const Discover = () => {
    return (
        <div>
            <div className="row m-0 mt-5 container">
                <div className="col-sm-12 col-md-6 discover-text">
                    <h1>Find Favorites and Discover New Ones</h1>
                    <p>No matter where you are and what you crave, our riders are ready to deliver from a wide range of restaurants and cuisines. Eat restaurant food at the comfort of your home!</p>
                    <h3>Download the App and Place Your Order</h3>
                    <p>Nothing makes food tastier than the topping of a good deal. Our continuous promotions and discounts will keep your lips smacking, always.</p>
                    <img className="my-4 me-3" src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/appstore_dark.png" alt="" />
                    <img className="my-4 me-3" src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/googlestore_dark.png" alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/2021/04/app.png" alt="" />
                </div>
                <hr className="mt-4" style={{color:"magenta"}} />
            </div>
        </div>
    );
};

export default Discover;