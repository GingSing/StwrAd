import React, { Component } from 'react';
import Page from '../Page';
import { BrandGallery } from '../../components';

import './Home.css';

class Home extends Component{
    render(){
        return(
            <Page>
                <div className="home">
                    <BrandGallery />
                </div>
            </Page>
        )
    }
}

export default Home;