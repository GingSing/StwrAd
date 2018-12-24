import React, { Component } from 'react';
import Page from '../Page';
import { BrandGallery } from '../../components';

import './Home.css';

class Home extends Component{
    render(){
        return(
            <Page>
                <div className="home">
                    <div className="featuredbrandgallery">Hello</div>
                    <img src="https://res.cloudinary.com/dozka0ivl/image/upload/v1545602758/products/t4vjq8kxxyv7bnhlysqj.png" alt="" width="500" height="500"/>
                    <BrandGallery />
                </div>
            </Page>
        )
    }
}

export default Home;