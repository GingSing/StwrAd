import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatText } from '../../utilities';

import FollowBtn from '../Buttons/FollowBtn';
import GalleryCard from './GalleryCard';

import './BrandGallery.css';

class BrandGallery extends Component{
    //fix so it only gives 6
    render(){
        let {topBrandsInfo} = this.props;
        return(
            <div className="brandGallery">
                {
                    topBrandsInfo && topBrandsInfo.map((brand,key) => {
                        return (
                            <div className="brandGalleryRow" key={key}>
                                <BrandDescriptionCard brand={brand}/>
                                <div className="brandGalleryRowImages">
                                    {
                                        brand.products.map((product, key) => {
                                            return <GalleryCard product={product} key={key}/>
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const BrandDescriptionCard = ({brand}) => {
    let {name, about} = brand;
    let link = `/shop/${name}`;
    return(
        <div className="brandDescriptionCard">
            <Link className="brandCardLink" to={link}>
                {formatText(name)}
            </Link>
            <h3>{about}</h3>
            <FollowBtn />
        </div>
    );
}

export default BrandGallery;