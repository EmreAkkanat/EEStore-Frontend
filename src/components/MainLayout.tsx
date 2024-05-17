import React, { ReactNode, useState } from 'react';
import '../styles/components/MainLayout.scss';

// components
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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

export default MainLayout;