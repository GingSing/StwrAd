import React, { Component } from 'react';
import { getBrandInfoAndImages } from '../../_actions/brandActions';
import { connect } from 'react-redux';
import { formatText } from '../../utilities';
import { ImageWrapper, FollowBtn, Loader } from '../../components';
import Page from '../Page';
import './Brand.css';

class Brand extends Component{

    componentWillMount(){
        let { brandName } = this.props.match.params;
        this.props.getBrandInfoAndImages(brandName);
    }

    render(){
        let { brandsInfo, gettingBrandAndImages } = this.props;
        return(
            <Page>
                { 
                    gettingBrandAndImages ? 
                    <Loader /> :
                    <div className="brand">
                        <BrandInfo brandsInfo={brandsInfo} />
                        <div className="brandInfoGalleryWrapper">
                            <div className="brandInfoGallery">
                            {
                                brandsInfo.products && brandsInfo.products.map((product, productKey) => {
                                    return product.image && product.image.map((image, imageKey) => {
                                        return( 
                                        <div className="brandInfoProduct" key={productKey}>
                                            <ImageWrapper srcProps={image.url} keyProps={imageKey} widthProps='200px' heightProps='200px'/>
                                        </div>
                                        );
                                    })
                                })
                            }
                            </div>
                        </div>
                    </div>
                }
            </Page>
        );
    }
}

const BrandInfo = ({brandsInfo}) => {
    let {logo, about, tags, name} = brandsInfo;
    return( 
        <div className="brandInfo">
            <div className="brandInfoNameWrapper">
                <img className="brandInfoLogo" src={logo} alt=""/>
                <h3 className="brandInfoName">{name ? formatText(name) : null}</h3>
            </div>
            <div className="brandInfoDescription">{about}</div>
            <div className="tags">{tags}</div>
            <div className="followBtnWrapper">
                <FollowBtn />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    brandsInfo: state.brand.brandsInfo,
    gettingBrandAndImages: state.brand.gettingBrandAndImages
});

const mapDispatchToProps = dispatch => ({
    getBrandInfoAndImages: (brandName) => {
        dispatch(getBrandInfoAndImages(brandName));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Brand);