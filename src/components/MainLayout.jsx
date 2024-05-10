import React, { useState } from 'react';

import '../styles/components/MainLayout.scss';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    const [navItemToggle, setNavItemToggle] = useState(0);

    return (
        <div className='main_layout'>
            <Header className="header" navItemToggle={navItemToggle} setNavItemToggle={setNavItemToggle} />
            <div className='children'>
                {navItemToggle > 0 && (<div className='bg_fade' />)}
                {children}
            </div>
            <Footer onMouseEnter={() => setNavItemToggle(0)} />
        </div>
    );
};

export default MainLayout;