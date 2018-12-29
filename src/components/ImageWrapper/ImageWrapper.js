import React, { Component } from 'react';
import Overlay from '../Overlay';
import Comments from '../Comments';

import './ImageWrapper.css';

class ImageWrapper extends Component{
    constructor(props){
        super(props);
        this.toggleOverlay=this.toggleOverlay.bind(this);
        this.state={
            open: false,
        }
    }

    toggleOverlay(){
        let { open } = this.state;
        this.setState({
            open: !open
        });
    }

    render(){
        let { srcProps, altProps, keyProps, widthProps, heightProps } = this.props;
        let { open } = this.state;
        let props = {
            src: srcProps,
            alt: altProps,
            height: heightProps,
            width: widthProps
        }
        return(
            <div className="imageWrapper" key={keyProps}>
                { open ?
                <Overlay handleClick={this.toggleOverlay}>
                    <div className="imageDivWrapper">
                        <div className="imageDiv">
                            <img {...props} />
                        </div>
                        <Comments />
                    </div>
                </Overlay> : null
                }
                <img {...props} onClick={this.toggleOverlay}/>
            </div>
        );
    }
}

export default ImageWrapper;