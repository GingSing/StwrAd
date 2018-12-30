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
        let { srcProps, keyProps, widthProps, heightProps, comments } = this.props;
        let { open } = this.state;
        let props = {
            src: srcProps,
            height: heightProps,
            width: widthProps
        }
        return(
            <div className="imageWrapper" key={keyProps}>
                { open ?
                <Overlay handleClick={this.toggleOverlay}>
                    <div className="imageDivWrapper">
                        <div className="imageDiv">
                            <div className="whiteBackground">
                                <img {...props} height="auto" width="400px" alt=""/>
                            </div>
                        </div>
                        <Comments comments={comments} />
                    </div>
                </Overlay> : null
                }
                <img {...props} onClick={this.toggleOverlay} alt=""/>
            </div>
        );
    }
}

export default ImageWrapper;