import React, {Component} from 'react';

class PostsComponents extends Component {
    render() {
        let {item,infoPosts} = this.props
        return (
            <div>
                {item.userId}-{item.id}-{item.title}
                <button onClick={()=>infoPosts(item.id)}>Open</button>
            </div>
        );
    }
}

export default PostsComponents;