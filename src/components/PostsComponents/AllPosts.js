import React, {Component} from 'react';
import PostsComponents from "./PostsComponents";
import {PostsService} from "../../services/postService/PostsService";

class AllPosts extends Component {

    state = {posts:[], chosenEl:null}

    PostsService = new PostsService();

    componentDidMount() {
        this.PostsService.onGetPost()
            .then(value => this.setState({posts:value}))
    }

    infoPosts=(id)=>{
        this.PostsService.getPostsById(id)
            .then(value => this.setState({chosenEl:value}))
    }

    render() {
        let {posts, chosenEl} = this.state;
        return (
            <div>
                {
                   posts.map(value=>(<PostsComponents item={value} key={value.id} infoPosts={this.infoPosts}/>))
                }

                <hr/>
                {
                    chosenEl&&<PostsComponents item={chosenEl}/>
                }
            </div>
        );
    }
}

export default AllPosts;