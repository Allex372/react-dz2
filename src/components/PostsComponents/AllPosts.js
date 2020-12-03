import React, {Component} from 'react';
import PostsComponents from "./PostsComponents";

class AllPosts extends Component {

    state = {posts:[], chosenEl:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postValue=>{
                this.setState({posts:postValue})
            })
    }

    infoPosts=(id)=>{
        let chosenEl = this.state.posts.find(value=>value.id===id);
        this.setState({chosenEl});
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