import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedIdPost: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const post = response.data.slice(0,4);
                const updatePost = post.map(post => {
                    return {
                        ...post,
                        author: 'Miguel'
                    }
                });
                this.setState({posts: updatePost})
                // console.log(response);
            }).catch(err => this.setState({error: true}));
    }

    assignSelectedPostHandler = (id) => {
        this.setState({selectedIdPost: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Todo se fue a la m</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => ( 
                <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={this.assignSelectedPostHandler.bind(null,post.id)}
                    />
            ));

        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectPost={this.state.selectedIdPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;