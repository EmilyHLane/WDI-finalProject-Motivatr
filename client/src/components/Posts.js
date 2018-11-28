import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

//get data from post api and pass to post as props
class Posts extends Component {
  state = {
    posts: ["something"]
  };

  componentDidMount() {
    axios.get("/api/post/").then(res => {
      const posts = res.data;
      this.setState({ posts });
      console.log(this.state.posts);
    });

    // const posts = axios.get("/api/post/");
    // this.setState({ posts });
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
