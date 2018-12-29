import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserTools from './UserTools';

import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navBarWrapper">
                <div className="navBar">
                    <BrandDiv name="StwrAd" />
                    <UserTools />
                </div>
            </div>
        );
    }
}

const BrandDiv = ({name}) => {
    return(
        <div className="brandDiv">
            <Link to="/">
                {name}
            </Link>
        </div>
    );
}

export default NavBar;