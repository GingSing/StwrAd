import React, { Component } from 'react';
import Page from '../Page';
import { connect } from 'react-redux';
import { getMostPopularBrandsAndImages } from '../../_actions/brandActions'
import { BrandGallery, Loader } from '../../components';

import './Home.css';

class Home extends Component{
    componentWillMount(){
        this.props.getMostPopularBrandsAndImages();
    }
    render(){
        return(
            <Page>
                {
                this.props.gettingTopBrandsInfo ? 
                <Loader/>:
                <div className="home">
                    <div className="featured"></div>
                    <BrandGallery topBrandsInfo={this.props.topBrandsInfo} />
                </div>
                }
            </Page>
        )
    }
}



const mapStateToProps = state => ({
    topBrandsInfo: state.brand.topBrandsInfo,
    gettingTopBrandsInfo: state.brand.gettingTopBrandsInfo
});

const mapDispatchToProps = dispatch => ({
    getMostPopularBrandsAndImages: () => {
        dispatch(getMostPopularBrandsAndImages());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);