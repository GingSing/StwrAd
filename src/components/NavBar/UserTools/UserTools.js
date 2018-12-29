import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import PrivateTools from './PrivateTools';

import './UserTools.css';
class UserTools extends Component{
    render(){
        return(
            <div className="userTools">
                <div className="searchBarWrapper">
                    <SearchBar />
                </div>
                <div className="toolsWrapper">
                    {
                        this.props.signedIn ? 
                        <PrivateTools /> :
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

export default connect(mapStateToProps)(UserTools);