import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import MainLayout from "../../components/MainLayout";
import "../../styles/pages/ProductDetailPage.scss";
import { Link } from 'react-router-dom';
import { increase, decrease } from '../../store/actions/counterActions';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);

    return (
        <MainLayout>
            <div className='product_detail'>
                <div className="category_path">
                    <Link to="/" className="category_path_name">Anasayfa</Link>
                    <IoIosArrowForward />
                    <Link className="category_path_name">Erkek</Link>
                    <IoIosArrowForward />
                    <Link className="category_path_name">Giyim</Link>
                    <IoIosArrowForward />
                    <Link className="category_path_name">Tişört</Link>
                </div>

                <div className="product_detail_container">
                    <div className="sec_left">
                        <img src="/img/product.jpg" alt="product_detail_image" className='product_detail_img' />
                    </div>

                    <div className="sec_right">
                        <div className="product_briefly">
                            <div className="briefly_left">
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

                                <div className="product_price">124,99 <span className='currency'>TL</span></div>

                                <div className="installment_options">21 TL x 6 aya varan <span className='bold'>Taksitle</span></div>
                            </div>

                            <div className="briefly_right">
                                <BsBookmark />
                                <div className="txt">Kaydet</div>
                            </div>
                        </div>

                        <div className="option_container">
                            <div className="color_option_container">
                                <h5 className="title">Renk Seçenekleri</h5>

                                <div className="card_container">
                                    <div className="color_option_card">
                                        <img src="/img/product.jpg" alt="product_detail_image" className='product_detail_img' />
                                        <div className="color_sec_right">
                                            <div className="color">Siyah</div>
                                            <div className="price">124,99 TL</div>
                                        </div>
                                    </div>

                                    <div className="color_option_card">
                                        <img src="/img/product.jpg" alt="product_detail_image" className='product_detail_img' />
                                        <div className="color_sec_right">
                                            <div className="color">Siyah</div>
                                            <div className="price">124,99 TL</div>
                                        </div>
                                    </div>

                                    <div className="color_option_card">
                                        <img src="/img/product.jpg" alt="product_detail_image" className='product_detail_img' />
                                        <div className="color_sec_right">
                                            <div className="color">Siyah</div>
                                            <div className="price">124,99 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="size_option_container">
                                <h5 className="title">Beden Seçenekleri</h5>

                                <div className="card_container">
                                    <div className="size_option_card">
                                        XS
                                    </div>
                                    <div className="size_option_card">
                                        S
                                    </div>
                                    <div className="size_option_card">
                                        M
                                    </div>
                                    <div className="size_option_card">
                                        L
                                    </div>
                                    <div className="size_option_card">
                                        XL
                                    </div>
                                    <div className="size_option_card">
                                        XXL
                                    </div>
                                    <div className="size_option_card">
                                        3XL
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="basket_container">
                            <div className="counter">
                                <button className="counter_btn" onClick={() => dispatch(decrease(value))}>-</button>
                                <div className="counter_value">{value}</div>
                                <button className="counter_btn" onClick={() => dispatch(increase(value))}>+</button>
                            </div>

                            <button className="basket_btn">
                                <BsFillBasket2Fill />
                                Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProductDetailPage;