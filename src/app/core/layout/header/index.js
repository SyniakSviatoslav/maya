import React from "react";
import './index.css';
import {NavLink, Link} from 'react-router-dom';
import {collectionPath, publishPath, signInPath, aboutPath, homePath} from "../../../constants";


const Header = () => {
    return (
        <header>
            <div className="header-content">
                <Link to={homePath}>
                <img  alt="Mayan Glyph" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mayan_Glyph.svg/64px-Mayan_Glyph.svg.png"></img>
                </Link>

                <nav>
                    <NavLink to={aboutPath} className="nav-item" activeClassName="nav-item-active">About</NavLink>
                    <NavLink to={collectionPath} className="nav-item" activeClassName="nav-item-active">Collection</NavLink>
                    <NavLink to={publishPath} className="nav-item" activeClassName="nav-item-active">Publish</NavLink>
                    <NavLink to={signInPath} className="nav-item" activeClassName="nav-item-active">Sign In</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;