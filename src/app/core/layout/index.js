import React,{Component} from "react";
import './index.css';
import Header from './header';




const Layout = ({ children }) => {
    
    return (
        <div className='layout'>
            <Header/>
            <main className='main'>{children}</main>
             
        </div>
    );
}

export default Layout;