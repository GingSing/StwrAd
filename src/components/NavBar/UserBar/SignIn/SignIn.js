import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../../_actions/authActions';
import Overlay from '../../../Overlay';

import './SignIn.css';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.toggleOverlay=this.toggleOverlay.bind(this);
        this.handleDisabled=this.handleDisabled.bind(this);
        this.state={
            open: false,
            username: '',
            password: '',
            disabled: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state, () => {
          this.setState({
            on: false,
          });
        });
      }
    
      handleDisabled(){
        if(this.state.username.trim() !== '' && this.state.password.trim() !== ''){
          this.setState({
            disabled: false,
          });
        }else{
          this.setState({
            disabled: true,
          });
        }
      }
    
      handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        }, () => this.handleDisabled()
        );
      }

    toggleOverlay(){
        let { open } = this.state;
        this.setState({
            open: !open,
            username: '',
            password: ''
        }, () => this.handleDisabled());
    }

    render(){
        let { open, disabled } = this.state;
        return(
            <div className="signIn">
                {
                    open ? 
                    <Overlay handleClick={this.toggleOverlay}>
                        <form className="signInOverlay" onSubmit={this.handleSubmit} >
                            <label>Sign In</label>
                            <LabeledInput name="username" onChange={this.handleChange} />
                            <LabeledInput name="password" onChange={this.handleChange} />
                            <button disabled={disabled} type="submit" value="submit" className="innerSignInBtn">
                                Sign In
                            </button>
                        </form>
                    </Overlay>:
                    <button className="signInBtn" onClick={this.toggleOverlay}>
                        <label> Sign In </label>
                    </button>
                }
            </div>
        );
    }
}

const LabeledInput = ({ onChange, name }) => {
    var fName = name.charAt(0).toUpperCase() + name.slice(1);
    return(
        <div className="labeledInput">
            <label>{fName}</label>
            <input name={name} onChange={onChange} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signIn:(state) => {
        const { username, password } = state;
        dispatch(signIn(username, password));
    }
});

export default connect(null, mapDispatchToProps)(SignIn);