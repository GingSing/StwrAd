import React, { Component } from 'react';
import { FeedAndFilter } from '../../components';
import Page from '../Page';

import './Browse.css';

class Browse extends Component{

    render(){
        return(
            <Page>
                <div className="browse">
                    <FeedAndFilter />
                </div>
            </Page>
        );
    }
}

export default Browse;