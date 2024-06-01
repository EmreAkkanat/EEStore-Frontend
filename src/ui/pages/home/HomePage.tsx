import React from 'react';
import "./HomePage.scss";

// components
import ProductBox from '../../components/product-box/ProductBox';
import Layout from '../../layout/Layout';

const HomePage = () => {

    return (
        <Layout>
            <div className="home_page">
                <div className="box_container">
                    <ProductBox />
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;