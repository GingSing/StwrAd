import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserBar from './UserBar';

import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navBarWrapper">
                <div className="navBar">
                    <Brand name="StwrAd" />
                    <UserBar />
                </div>
            </div>
        );
    }
}

const Brand = ({name}) => {
    return(
        <div className="brand">
            <Link to="/">
                {name}
            </Link>
        </div>
    );
}

export default NavBar;