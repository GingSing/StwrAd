import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserTools.css';

class UserTools extends Component{
    render(){
        return(
            <div className="userTools">
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </div>
        );
    }
}

export default UserTools;