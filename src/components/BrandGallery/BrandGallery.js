import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMostPopularBrandsAndImages } from '../../_actions/brandActions'
import { formatText } from '../../utilities';

import GalleryCard from './GalleryCard';

import './BrandGallery.css';

class BrandGallery extends Component{

    componentWillMount(){
        this.props.getMostPopularBrandsAndImages();
    }

    //fix so it only gives 6
    render(){
        return(
            this.props.gettingCompanyInfo ? 
            <div> TODO: WILL CHANGE TO LOADING DIV </div> :
            <div className="brandGallery">
                {
                    this.props.companyInfo && this.props.companyInfo.map((company,key) => {
                        return (
                            <div className="brandGalleryRow" key={key}>
                                <BrandDescriptionCard company={company}/>
                                <div className="brandGalleryRowImages">
                                    {
                                        company.products.map((product, key) => {
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

const BrandDescriptionCard = ({company}) => {
    let {name, about} = company;
    let link = `/shop/${name}`;
    return(
        <div className="brandDescriptionCard">
            <Link className="brandCardLink" to={link}>
                {formatText(name)}
            </Link>
            <h3>{about}</h3>
        </div>
    );
}

const mapStateToProps = state => ({
    companyInfo: state.brand.companyInfo,
    gettingCompanyInfo: state.brand.gettingCompanyInfo
});

const mapDispatchToProps = dispatch => ({
    getMostPopularBrandsAndImages: () => {
        dispatch(getMostPopularBrandsAndImages());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandGallery);