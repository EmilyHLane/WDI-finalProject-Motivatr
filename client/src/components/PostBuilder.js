import React, { Component } from "react";
import NewPost from "./NewPost";
import { Link } from "react-router-dom";

class PostBuilder extends Component {
  render() {
    return (
      <div className="post-builder-container col-1">
        <h2>Post Builder</h2>
        <h3>Create motivation, share it with the world!</h3>
        <NewPost />
        <Link to="/quotefinder" className="find-quote-link">
          Need some help? Find a quote
        </Link>
      </div>
    );
  }
}

export default PostBuilder;
