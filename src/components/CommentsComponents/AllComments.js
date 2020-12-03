import React, {Component} from 'react';
import CommentsComponent from "./CommentsComponent";

class AllComments extends Component {

    state = {comments:[], choosenComents:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsValue => {
                this.setState({comments: commentsValue})
            })
    }

    selectComments =(id)=>{
        let choosenComents = this.state.comments.find(value => value.id === id)
        this.setState({choosenComents})
    }

    render() {
        let {comments, choosenComents} = this.state
        return (
            <div>
                {
                    comments.map(value => (<CommentsComponent
                        item={value}
                        key={value.id}
                        selectComments={this.selectComments}
                    />))
                }
                <hr/>
                {
                    choosenComents&&<CommentsComponent item={choosenComents}/>
                }
            </div>
        );
    }
}

export default AllComments;