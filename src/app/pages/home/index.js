import React from "react";
import './index.css';
import Video from './../../video/video.mp4'

const HomeComponent = () => {
    
    return (
        <div className="home">
           <video autoPlay="autoplay" muted="true" loop="loop" id="myVideo" >
				  <source src={Video} type="video/mp4"></source>
				</video> 
                <div className="slide">
                    <p>Collection</p>
                </div>
                <div className="container">
                    <p>There must be something</p>
                </div>
        </div>
    );
}
export default HomeComponent;