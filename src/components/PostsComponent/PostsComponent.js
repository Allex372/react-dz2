import React, {Component} from 'react';
import PostComponent from "./PostComponent";


class PostsComponent extends Component {

    state = {posts:[]};


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsValue => {
                this.setState({posts:postsValue})
            })

    }


    render() {
        let {posts} = this.state
        return (
            <div>
                <h3>Page</h3>
                {
                    posts.map(value => (<PostComponent item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default PostsComponent;