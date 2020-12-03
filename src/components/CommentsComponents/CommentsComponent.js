import React, {Component} from 'react';

class CommentsComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.postId}-{item.email}
            </div>
        );
    }
}

export default CommentsComponent;