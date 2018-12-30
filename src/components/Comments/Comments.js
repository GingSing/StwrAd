import React, { Component } from 'react';
import './Comments.css';


/**
 * get Comments from actions
 */
class Comments extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){

        let { comments } = this.props;

        let style = {
            width: this.props.widthProps
        }

        return(
            <div className="commentsWrapper" style={style}>
                <form className="commentsForm" onSubmit={this.handleSubmit}>
                    <input className="commentsInput" />
                    <button type="submit" className="commentsSubmit">Submit</button>
                </form>
                <div className="comments">
                    {
                        comments ? comments.map((comment) => {
                            return <Comment comment={comment} />
                        }) :
                        <div className="commentsDefault">
                            No Discussion Currently
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const Comment = ({comment}) => {

    let { text } = comment;

    return(
        <div className="comment">
            {text}
            <p>
                It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English. Many desktop 
                publishing packages and web page editors now use Lorem Ipsum as their default model 
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).
            </p>
        </div>
    );
}

export default Comments;