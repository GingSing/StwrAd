import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

const overlay = document.getElementById('overlay');

class Overlay extends Component{
  constructor(props){
    super(props);
    this.el = document.createElement('div');
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    overlay.appendChild(this.el)
  }


  componentWillUnmount(){
    overlay.removeChild(this.el);
  }

  handleClick(e){
    if(!this.node.contains(e.target)){
      this.props.handleClick();
    }
  }
  render(){
    return ReactDOM.createPortal(
      <div className="overlayWrapper" onClick={this.handleClick}>
        <div className="overlay" ref={ node => { this.node = node;} }>
          {this.props.children}
        </div>
      </div>,
      this.el,
    );
  }
}

export default Overlay;
