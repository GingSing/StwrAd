import React, { Component } from 'react';

import './GalleryCard.css';

class GalleryCard extends Component{
    render(){
        let { url, title, description, likes } = this.props.imageInfo;
        return(
            <div className="galleryCard">
                <img src={url} alt=""/>
                <h2>{title}</h2>
                <span>{description}</span>
                <div className="galleryCardImageInfo">
                    <label>Likes: </label>{likes}
                </div>
            </div>
        );
    }
}

export default GalleryCard;