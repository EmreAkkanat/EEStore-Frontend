import React, { ReactNode, useState } from 'react';
import './Layout.scss';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [navItemToggle, setNavItemToggle] = useState<number>(0);

    return (
        <div className='main_layout'>
            <Header navItemToggle={navItemToggle} setNavItemToggle={setNavItemToggle} />
            <div className='children'>
                {navItemToggle > 0 && (<div className='bg_fade' />)}
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;