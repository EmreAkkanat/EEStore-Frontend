import React from 'react';
import "./ProductBox.scss";
import { Link } from 'react-router-dom';

// icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductBox = () => {
    return (
        <Link to="product-detail" className="product_box">
            <img src="./img/product.jpg" alt="product" className="product_img" />

            <div className="bottom_sec">
                <div className="product_title_content">
                    <h1 className="product_title">Abcfd </h1>
                    <p className='product_desc'>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="product_star">
                    <p className="star_value">3.5</p>

                    <div className="star_container">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                        <FaRegStar />
                    </div>

                    <div className="star_number">(14999)</div>
                </div>

                <div className="product_price">124,99 TL</div>
            </div>
        </Link>
    );
};

export default ProductBox;