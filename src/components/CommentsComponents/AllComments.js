import React, {Component} from 'react';
import CommentsComponent from "./CommentsComponent";
import {CommentService} from "../../services/commentService/CommetnService";

class AllComments extends Component {

    state = {comments:[], choosenComents:null}

    commentService = new CommentService();

    componentDidMount() {
        this.commentService.onDisplayComments()
            .then(value => {
                this.setState({comments:value})
            })
    }

    selectComments =(id)=>{
        this.commentService.onDisplayId(id)
            .then(value => this.setState({choosenComents: value}))
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