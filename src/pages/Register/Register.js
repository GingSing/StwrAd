import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAccount } from '../../_actions/userActions';
import { Loader } from '../../components';
import Page from '../Page';

import './Register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.activateAccountRegistered=this.activateAccountRegistered.bind(this);
        this.state={
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            registeredAccount: false,
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.registerAccount(this.state);
        this.activateAccountRegistered();
    }

    activateAccountRegistered(){
        this.setState({
            registeredAccount: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    registeredAccount: false
                }, () => {
                    this.props.history.push("/");
                })
            }, 3000);
        })
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        let { registeringAccount } = this.props;
        let { registeredAccount } = this.state;
        return(
            <Page>
                {
                    registeredAccount ? <div>Registered</div> : (registeringAccount ? <Loader /> :
                    <div className="register">
                        <form className="registerForm" onSubmit={this.handleSubmit}>
                            <h3>Create Account</h3>
                            <label> Username</label>
                            <input name="username" onChange={this.handleChange}/>
                            <label>Your Name</label>
                            <input name="name" onChange={this.handleChange}/>
                            <label>Email</label>
                            <input name="email" onChange={this.handleChange}/>
                            <label>Password</label>
                            <input name="password" onChange={this.handleChange}/>
                            <label>Confirm Password</label>
                            <input name="confirmPassword" onChange={this.handleChange}/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    )
                }
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    registeringAccount: state.user.registeringAccount
});

const mapDispatchToProps = dispatch => ({
    registerAccount: (state) => {
        const { email, name, username, password, confirmPassword } = state;
        dispatch(registerAccount(username, name, email, password, confirmPassword));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);