import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { BsFillBasket2Fill } from "react-icons/bs";
import '../styles/components/Header.scss';
import { category } from '../TempData';
import { HiOutlineUser } from "react-icons/hi";
import { HiMiniUser } from "react-icons/hi2";


const Header = ({ navItemToggle, setNavItemToggle }) => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previus = scrollY.getPrevious();
        if (latest > previus) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    let timeout;
    const handleMouseEnter = (navItemId) => {
        if (navItemToggle > 0) {
            setNavItemToggle(navItemId);
        } else {
            timeout = setTimeout(() => {
                setNavItemToggle(navItemId);
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        clearTimeout(timeout);
        setNavItemToggle(0);
    };

    return (
        <motion.header className='header'
            variants={{
                visable: { height: "122.38px" },
                hidden: { height: "83px" },
            }}
            initial={hidden ? "hidden" : "visible"}
            animate={hidden ? "hidden" : "visible"}
            transition={{
                duration: 0.15,
                case: "easeInOut",
            }}
        >
            <div className="sec_top">
                <h1 className="logo"><Link to="/">EEStore</Link></h1>

                <div className="search_container">
                    <input className="search_input" placeholder='Aradığınız ürün' />
                    <Link className='search_icon'><IoSearch /></Link>
                </div>

                <div className="sign_container">
                    <div className="sign_item">
                        <HiMiniUser className='icon' />
                        Giriş Yap
                    </div>

                    <div className="sign_item">
                        <BsFillBasket2Fill className='icon' />
                        Sepetim
                    </div>
                </div>
            </div>

            <motion.div className="sec_bottom"
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 },
                }}
                initial={hidden ? "hidden" : "visible"}
                animate={hidden ? "hidden" : { visibility: "visible", display: "block" }}
                transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                    if (hidden) {
                        document.querySelector(".sec_bottom").style.display = "none";
                    }
                }}
            >
                <nav className='nav_items_container'>
                    <ul className="nav_items">
                        {category.map((navItem) => (
                            <li className={`nav_item ${navItemToggle === navItem.id ? "active" : ""}`} key={navItem.id} /* onMouseEnter={() => navItemToggle > 0 ? setNavItemToggle(navItem.id) : setTimeout(() => { setNavItemToggle(navItem.id); }, 500)} */ onMouseEnter={() => handleMouseEnter(navItem.id)} /* onMouseLeave={() => setNavItemToggle(0)} */ onMouseLeave={handleMouseLeave}>
                                {navItem.icon && navItem.icon}
                                {navItem.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                {navItemToggle > 0 &&
                    (<div className="nav_item_toggle" onMouseEnter={() => setNavItemToggle(category.filter(categoryItem => categoryItem.id === navItemToggle)[0].id)} onMouseLeave={() => setNavItemToggle(0)}>
                        <ul className="nav_toggle_items">
                            {category.filter(categoryItem => categoryItem.id === navItemToggle)[0].sub_category?.map((subCategory) => (
                                <React.Fragment key={subCategory.id}>
                                    <h4 className="title">{subCategory.name}</h4>

                                    {subCategory?.sub_category?.map((subCategory2) => (
                                        <li className="nav_toggle_item" key={subCategory2.id}><Link className='nav_item_toggle_item'>{subCategory2.name}</Link></li>
                                    ))}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>)
                }
            </motion.div>
        </motion.header >
    );
};

export default Header;