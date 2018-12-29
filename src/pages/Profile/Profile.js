import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import Page from '../Page';

import './Profile.css';

class Profile extends Component{

    render(){
        return (
            this.props.userInfo ?
            <Page>
                <div className="profile">
                    {this.props.userInfo ? 
                    <ProfileCard userInfo={this.props.userInfo.user}/>:
                    null
                    }
                </div>
            </Page>:
            <div> Error 404: Page Not Found.</div>
        );

    }
}

const mapStateToProps = state => ({
    userInfo: state.auth.userInfo,
    signingIn: state.auth.signingIn
});

export default connect(mapStateToProps)(Profile);