import React, { Component } from 'react';
import {NavBar} from '../../components';

import './Page.css';

class Page extends Component{

  render(){
    return(
      <div className="page">
        <NavBar />
        <div className="childrenWrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;
