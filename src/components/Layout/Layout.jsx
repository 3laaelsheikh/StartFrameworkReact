import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        return <>
        <Navbar />
        
        <Outlet />


        <Footer />
        
        </>
    }
}

export default Layout;
