import React, { Component } from 'react';
import ImageWrapper from '../../ImageWrapper';
import './GalleryCard.css';

class GalleryCard extends Component{
    render(){
        let { url, title, description, likes } = this.props.product.image[0];
        return(
            <div className="galleryCard">
            <ImageWrapper srcProps={url} heightProps="200px" widthProps="200px"/>
            {/*
            
            make white card to show description
            
            <div className="galleryCardDescription">
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