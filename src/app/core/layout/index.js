import React,{Component} from "react";
import './index.css';
import Header from './header';
import FooterComponent from "../footer";




const Layout = ({ children }) => {
    
    return (
        <div className='layout'>
            <Header/>
            <main className='main'>{children}</main>
             <FooterComponent/>
        </div>
    );
}

export default Layout;