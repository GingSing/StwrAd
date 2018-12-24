import React, { Component } from 'react';
import Feed from './Feed';
import Filter from './Filter';

import './FeedAndFilter.css';

class FeedAndFilter extends Component{
    render(){
        return(
            <div className="feedAndFilter">
                <div className="left">
                    <Filter />
                </div>
                <div className="right">
                    <Feed />
                </div>
            </div>
        );
    }
}

export default FeedAndFilter;