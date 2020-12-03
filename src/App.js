import React, {Component} from 'react';
import AllComments from "./components/CommentsComponents/AllComments";
import AllPosts from "./components/PostsComponents/AllPosts";

class App extends Component {


    render() {
    return (
        <div>
            <AllComments/>
            <hr/>
            <AllPosts/>
        </div>
    );
  }
}

export default App;
