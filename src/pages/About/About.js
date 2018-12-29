import React, { Component } from 'react';

class About extends Component{
    render(){
        console.log(this.props.match)
        return(
            <div className="about">
            </div>
        );
    }
}

export default About;