import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsForGallery } from '../../_actions/galleryActions'

import GalleryCard from './GalleryCard';

import './BrandGallery.css';

class BrandGallery extends Component{

    componentWillMount(){
        this.props.getProductsForGallery();
    }

    render(){
        return(
            <div className="brandGallery">
                {
                    this.props.brandImages && this.props.brandImages.map((data,key) => {
                        return (
                            <div className="brandGalleryRow" key={key}>
                                <BrandDescriptionCard brandName={data.brandName} description={data.description}/>
                                {
                                    data.images.map((image, key) => {
                                        return <GalleryCard imageInfo={image} key={key}/>
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const BrandDescriptionCard = ({brandName, description}) => {
    let link = `/shop/:${brandName}`
    return(
        <div className="brandDescriptionCard">
            <Link to={link}>
                {brandName}
            </Link>
            <h3>{description}</h3>
        </div>
    );
}

const mapStateToProps = state => ({
    brandImages: state.gallery.imagesInfo
});

const mapDispatchToProps = dispatch => ({
    getProductsForGallery: () => {
        dispatch(getProductsForGallery());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandGallery);