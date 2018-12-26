import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import Page from '../Page';

import './Profile.css';

class Profile extends Component{

    render(){
        console.log(this.props.userInfo);
        return(
            <Page>
                <div className="profile">
                    {this.props.userInfo ? 
                    <ProfileCard userInfo={this.props.userInfo.user}/>:
                    null
                    }
                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.auth.userInfo,
    signingIn: state.auth.signingIn
});

export default connect(mapStateToProps)(Profile);