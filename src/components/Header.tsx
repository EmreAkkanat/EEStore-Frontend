import React, { useRef, useState } from 'react';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

//icons
/* import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai"; */
import { IoSearch } from "react-icons/io5";
import { BsFillBasket2Fill } from "react-icons/bs";
import { HiMiniUser } from "react-icons/hi2";
/* import { HiOutlineUser } from "react-icons/hi"; */
import { FaBars } from "react-icons/fa";


interface HeaderProps {
    navItemToggle: number;
    setNavItemToggle: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ navItemToggle, setNavItemToggle }) => {
    const [hidden, setHidden] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleMouseEnter = (navItemId: number) => {
        if (navItemToggle > 0) {
            setNavItemToggle(navItemId);
        } else {
            timeoutRef.current = setTimeout(() => {
                setNavItemToggle(navItemId);
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setNavItemToggle(0);
    };

    const animationHeader = {
        variants: {
            visible: { height: "122.38px" },
            hidden: { height: "83px" },
        },
        transition: {
            duration: 0.15,
            case: "easeInOut",
        },
    };

    const animationSecBottom = {
        variants: {
            visible: { y: 0, opacity: 1 },
            hidden: { y: "-100%", opacity: 0 },
        },
        transition: {
            duration: 0.15,
            ease: "easeInOut",
        },
        onAnimationComplete: (hidden: boolean) => {
            if (hidden) {
                const element = document.querySelector(".sec_bottom") as HTMLDivElement | null;
                if (element) {
                    element.style.display = "none";
                }
            }
        }
    };

    return (
        <motion.header className='header' variants={animationHeader.variants} initial={hidden ? "hidden" : "visible"} animate={hidden ? "hidden" : "visible"} transition={animationHeader.transition}>
            <div className="sec_top">
                <h1 className="logo"><Link to="/">EEStore</Link></h1>

                <div className="search_container">
                    <input className="search_input" placeholder='Aradığınız ürün' />
                    <Link to="" className='search_icon'><IoSearch /></Link>
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

            <motion.div className="sec_bottom" variants={animationSecBottom.variants} initial={hidden ? "hidden" : "visible"} animate={hidden ? "hidden" : { visibility: "visible", display: "block" }} transition={animationSecBottom.transition} onAnimationComplete={() => animationSecBottom.onAnimationComplete(hidden)}>
                <nav className='nav_items_container'>
                    <ul className="nav_items">
                        <li className={`nav_item ${navItemToggle === 1 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                            <FaBars />
                            Tüm Kategoriler
                        </li>
                        <li className={`nav_item ${navItemToggle === 2 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Kadın</li>
                        <li className={`nav_item ${navItemToggle === 3 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Erkek</li>
                        <li className={`nav_item ${navItemToggle === 4 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Ev & Yaşam</li>
                        <li className={`nav_item ${navItemToggle === 5 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Kozmetik</li>
                        <li className={`nav_item ${navItemToggle === 6 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>Ayakkabı & Çanta</li>
                        <li className={`nav_item ${navItemToggle === 7 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>Elektronik</li>
                        <li className={`nav_item ${navItemToggle === 8 ? "active" : null}`} onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>Spor & Outdoor</li>
                    </ul>
                </nav>

                {navItemToggle > 0 &&
                    (<div className="nav_item_toggle" onMouseEnter={() => setNavItemToggle(1)} onMouseLeave={handleMouseLeave}>
                        <ul className="nav_toggle_items">
                            <h4 className="title">Giyim</h4>

                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Elbise</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Pantolon</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Tişört</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Sweet</Link>
                            </li>
                        </ul>

                        <ul className="nav_toggle_items">
                            <h4 className="title">Ayakkabı</h4>

                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Outdoor</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Spor</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Topuklu Ayakkabı</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Sneaker</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Babet</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Sandalet</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Bot</Link>
                            </li>
                            <li className="nav_toggle_item">
                                <Link to="" className='nav_item_toggle_item'>Çizme</Link>
                            </li>
                        </ul>
                    </div>)
                }
            </motion.div>
        </motion.header >
    );
};

export default Header;