import React, { Component } from 'react';
import Page from '../Page';

import './RegisterCompany.css';

class RegisterCompany extends Component{
    render(){
        return(
            <Page>
                <div className="registerCompany">
                    <form className="registerCompanyForm">
                        <input />
                        <input />
                        <button type="submit" className="registerCompanyFormSubmit">Submit</button>
                    </form>
                </div>
            </Page>
        );
    }
}

export default RegisterCompany;