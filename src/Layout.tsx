// import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../src/components/common/Navbar';
// import Footer from '../src/components/layout/Footer';

const Layout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;