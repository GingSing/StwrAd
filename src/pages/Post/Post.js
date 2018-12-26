import React, { Component } from 'react';
import Page from '../Page';

class Post extends Component{
    render(){
        return(
            <Page>
                <div className="post">
                    <form className="postForm">
                        <input type="text"></input>
                        <input type="text"></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Page>
        );
    }
}

export default Post;