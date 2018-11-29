import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("/api/post/").then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;
