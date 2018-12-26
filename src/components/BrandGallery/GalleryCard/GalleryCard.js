import React, { Component } from 'react';

import './GalleryCard.css';

class GalleryCard extends Component{
    render(){
        let { url, title, description, likes } = this.props.product.image[0];
        return(
            <div className="galleryCard">
            <img src={url} alt="" width="200" height="200"/>
            {/* <div className="galleryCardDescription">
                <h2>{title}</h2>
                <span>{description}</span>
                <div className="galleryCardImageInfo">
                    <label>Likes: </label>{likes}
                </div>
            </div> */}
            </div>
        );
    }
}

export default GalleryCard;