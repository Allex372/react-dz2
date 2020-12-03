import React, {Component} from 'react';

class CommentsComponent extends Component {
    render() {
        let {item,selectComments} = this.props
        return (
            <div>
                {item.postId}-{item.id}-{item.name}
                <button onClick={()=>selectComments(item.id)}>open</button>

            </div>
        );
    }
}

export default CommentsComponent;