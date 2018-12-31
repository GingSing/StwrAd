import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../../_actions/authActions';
import './PrivateTools.css';

class PrivateTools extends Component{
    constructor(props){
        super(props);
        this.toggleOpen=this.toggleOpen.bind(this);
        this.changeHamburger=this.changeHamburger.bind(this);
        this.state={
            open: false,
            change: false
        }
    }

    toggleOpen(){
        let {open, change} = this.state;
        this.setState({
            open: !open,
            change: !change,
        });
    }

    changeHamburger(name){
        let {change} = this.state;
        return `${change ? "change " + name : name}`;
    }

    render(){
        let {open} = this.state;
        return(
            <div className="privateTools">
                <button className="privateToolsHamburger" onClick={this.toggleOpen}>
                    <div className={this.changeHamburger("bar1")}></div>
                    <div className={this.changeHamburger("bar2")}></div>
                    <div className={this.changeHamburger("bar3")}></div>
                </button>
                { open ?
                    <div className="privateToolsList">
                        <Link to="/browse">Browse</Link>
                        {
                            JSON.parse(localStorage.getItem('user')).user.company ? <Link to="/post">Post</Link> : null
                        }
                        <Link to="/profile">Profile</Link>
                        <Link to="/">
                            <SignOutBtn signOut={this.props.signOut}/>
                        </Link>
                    </div> : null
                }
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