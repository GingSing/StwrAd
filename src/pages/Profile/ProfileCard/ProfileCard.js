import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {formatText} from '../../../utilities';
import './ProfileCard.css';


class ProfileCard extends Component{
    render(){
        let {name, company, email, username, dateJoined } = this.props.userInfo;
        return(
            <div className="profileCard">
                <h2>Profile </h2>
                <div className="userInfo">
                    <label>Username: {formatText(username)}</label> 
                    <label>Name: {formatText(name)}</label>
                    <label>Email: {email}</label> 
                    <label>Date Joined: {dateJoined}</label>
                </div>
                <h2>Company</h2>
                {
                    company ? 
                    <div className="profileCompany">
                        {formatText(company.name)}
                    </div> :
                    <Link to="/registerCompany" className="registerCompanyLink">Register for a Company</Link>
                }
            </div>
        );
    }
}

export default ProfileCard;