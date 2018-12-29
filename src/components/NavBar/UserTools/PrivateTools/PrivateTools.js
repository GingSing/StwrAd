import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../../_actions/authActions';
import './PrivateTools.css';

class PrivateTools extends Component{
    render(){
        return(
            <div className="privateTools">
                <Link to="/browse">Browse</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/">
                    <SignOutBtn signOut={this.props.signOut}/>
                </Link>
            </div>
        );
    }
}

const SignOutBtn = ({signOut}) => {
    return(
        <button onClick={signOut}>Signout</button>
    );
}

const mapDispatchToProps = dispatch => ({
    signOut:()=>{
        dispatch(signOut());
    }
});

export default connect(null, mapDispatchToProps)(PrivateTools);