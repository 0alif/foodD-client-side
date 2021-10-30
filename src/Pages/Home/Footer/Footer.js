import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row container">
                <div className="col-md-6 col-sm-12 footer-text">
                    <h2>FoodD.</h2>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Newsroom</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="col-md-6 col-sm-12 footer-text">
                    <h2>Download the App</h2>
                    <p>Online Food Delivery Usa - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover.</p>
                    <img src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/elementor/thumbs/appstore-p65i2t8biev82g2uvmpozrcji6igq0t9xphmqd4z5s.png" alt="" />
                    <img src="https://puzzlerbox.com/templatekits-pro/food-delivery/wp-content/uploads/sites/3/elementor/thumbs/googlestore-p65i2wzo9r0dcvxe9oc79qedvpzxkt87a83kngzegw.png" alt="" />
                </div>
                <hr style={{color:'white'}} />
            </div>

            <div className="row container pt-5 pb-3">
                <div className="col-md-6 col-sm-12 mb-4">
                <SocialIcon className="me-3" url="https://twitter.com/" />
                <SocialIcon className="me-3" url="https://facebook.com/" />
                <SocialIcon className="me-3" url="https://youtube.com/" />
                </div>
                <div className="col-md-6 col-sm-12 coppy-text">
                    <p><small>© 2020 Food Delivery - Your Favorite Food, on the way! Integer rutrum, ante nec hendrerit blandit, neque mauris eleifend odio, nec mollis dolor urna nec neque. Quisque egestas consequat suscipit.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;