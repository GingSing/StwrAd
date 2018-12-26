import React, { Component } from 'react';
import Page from '../Page';

import './Post.css';

class Post extends Component{
    render(){
        return(
            <Page>
                <div className="post">
                    <form className="postForm">
                        <label>Product Name:</label><input type="text"></input>
                        <label>Product Description:</label><input type="text"></input>
                        <label>Product Images:</label><input type="file" accept="image/png, image/jpeg"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Page>
        );
    }
}

export default Post;