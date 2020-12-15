import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        deleted: false,
    }

    componentDidUpdate() {
        if(this.props.selectPost){
            if(!this.state.deleted & (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.selectPost))){
                axios.get(`/posts/${this.props.selectPost}`)
                    .then(response => {
                        this.setState({loadedPost: response.data, deleted:false})                        
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.selectPost}`)
            .then(response => this.setState({loadedPost: null, deleted: true}));
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.selectPost){
            post = <p style={{textAlign: 'center'}}>Loading post...</p>;
            if(this.state.loadedPost){
                post = (
                    <div className="FullPost">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                        </div>
                    </div>
        
                );
            }
        }
        return post;
    }
}

export default FullPost;