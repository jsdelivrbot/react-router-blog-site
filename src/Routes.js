import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import NewPost from './components/NewPost';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={PostsIndex} />
        <Route path='/posts/new' component={NewPost} />
      </div>
    );
  }
}

export default Routes;
