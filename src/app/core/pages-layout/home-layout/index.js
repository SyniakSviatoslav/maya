import React from "react";
import './index.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import image1 from '../../../assets/images/costadelgolfo.png';
import image2 from '../../../assets/images/maya.png';
import image3 from '../../../assets/images/mexica.png';
import Video from '../../../assets/video/video.mp4'

const slideImages = [
    {image1}, { image2 }, { image3 }
];

const HomeLayout = () => {
    return (
        <div>
            <video autoPlay="autoplay" muted="true" loop="loop" id="introVideo" >
                <source src={Video} type="video/mp4"></source>
            </video>
            <div className="slideTitle">
                <h1>Collecion</h1>
                </div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
            <div className="informationForVisitor">
                <h2>Information to the Visitor</h2>
                <div className="lineTitle"></div>
                <p>Hello and welcome you on my first react app, please be humble and don`t me criticize too much</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed quam nulla. Aliquam erat volutpat. In congue at leo in imperdiet. Nullam at tellus quis ante facilisis iaculis sed vitae tortor. Suspendisse ac rhoncus enim. Curabitur consequat eleifend commodo. Donec vitae sapien sapien. Proin mollis non mi eu fringilla. Aenean augue mi, auctor sed lectus ut, scelerisque sollicitudin nulla. Nulla ultrices id quam eget rutrum.Aliquam erat volutpat. Duis finibus ullamcorper imperdiet. In hac habitasse platea dictumst. Etiam laoreet varius nisi quis ornare. Nunc posuere et lorem in suscipit. Suspendisse auctor sem purus. Nullam nec nulla at odio lacinia accumsan vel vel sapien. Maecenas tempus sed magna eu bibendum. Curabitur in sapien quis sapien venenatis feugiat. Nam sagittis massa est, sit amet finibus nibh luctus sodales. Praesent consectetur porttitor turpis, ac vestibulum velit rutrum a. Aenean lobortis pharetra ipsum sit amet aliquam.Maecenas lobortis ante at magna iaculis euismod vitae vitae felis. Aenean sit amet nisl et sapien ultrices feugiat. Duis dapibus accumsan porta. Aliquam bibendum egestas est quis iaculis. Phasellus pulvinar suscipit erat nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quam est, fermentum in venenatis vel, finibus eget turpis. Nam placerat, nibh id luctus efficitur, velit augue iaculis ante, a consequat ipsum mi a velit. Pellentesque congue fringilla ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies quis elit pretium porttitor. Aliquam aliquet sem nec arcu pulvinar, vitae varius sem faucibus. Sed laoreet libero nisl, ornare dictum velit mattis vitae. Vivamus ultrices eros id dolor accumsan, at molestie sem consectetur. Etiam vel nisi nec enim luctus feugiat non eget felis.</p>
            </div>
        </div>
    )
};

export default HomeLayout;

