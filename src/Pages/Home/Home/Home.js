import React from 'react';
import Banner from '../Banner/Banner';
import Discover from '../Discover/Discover';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Discover></Discover>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;