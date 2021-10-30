import React,{Component} from "react";
import './index.css';
import Header from './header';
import Video from '../../video/video.mp4'



const Layout = ({ children }) => {
    
    return (
        <div className='layout'>
            <Header/>
            <main className='main'>{children}</main>
             {/* <video autoPlay="autoplay" muted="true" loop="loop" id="myVideo" >
				  <source src={Video} type="video/mp4"></source>
				</video>  */}
            
        </div>
    );
}

export default Layout;