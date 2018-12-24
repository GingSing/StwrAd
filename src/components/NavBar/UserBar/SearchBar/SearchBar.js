import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component{
    render(){
        return(
            <div className="searchBar">
                <input type="text" placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;