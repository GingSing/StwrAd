import React, { Component } from 'react';

class About extends Component{
    render(){
        console.log(this.props.match)
        return(
            <div className="about">
                {this.props.match.params.companyName}
            </div>
        );
    }
}

export default About;