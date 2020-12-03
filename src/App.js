import React, {Component} from 'react';
import PostsComponent from "./components/PostsComponent/PostsComponent";
import AllComments from "./components/CommentsComponents/AllComments";

class App extends Component {


    render() {
    return (
        <div>
            <PostsComponent/>
            <hr/>
            <AllComments/>
        </div>
    );
  }
}

export default App;
