import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SignIn from './SignIn';

import './UserBar.css';
class UserBar extends Component{
    render(){
        return(
            <div className="userBar">
                <SearchBar />
                <div className="toolsWrapper">
                    {
                        this.props.signedIn ? null:
                        <SignIn />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    signedIn: state.auth.signedIn
});

export default connect(mapStateToProps)(UserBar);