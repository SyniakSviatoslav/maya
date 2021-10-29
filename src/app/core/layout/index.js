import React from "react";
import './index.css';
import Header from './header';
import Video from '../../video/video.mp4'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header/>
            <main className='main'{...children}>
            <video autoPlay="autoplay" muted="true" loop="" id="myVideo" >
				  <source src={Video} type="video/mp4"></source>
				</video>
            </main>
        </div>
    )
}

export default Layout;