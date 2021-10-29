import React from "react";
import './index.css';
import {NavLink, Link} from 'react-router-dom';
import {collectionPath, publishPath, signInPath, aboutPath, homePath} from "../../../constants";


const Header = () => {
    return (
        <header>
            <div className="header-content">
                <Link to={homePath}>
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