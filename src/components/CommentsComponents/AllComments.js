import React, {Component} from 'react';
import CommentsComponent from "./CommentsComponent";

class AllComments extends Component {

    state = {comments:[]}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsValue => {
                this.setState({comments: commentsValue})
            })
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map(value => (<CommentsComponent item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllComments;