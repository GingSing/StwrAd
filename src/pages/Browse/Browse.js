import React, { Component } from 'react';
import { FeedAndFilter } from '../../components';

import './Browse.css';

class Browse extends Component{
    render(){
        return(
            <div className="browse">
                <FeedAndFilter />
            </div>
        );
    }
}

export default Browse;