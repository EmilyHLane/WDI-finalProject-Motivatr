import React, { Component } from "react";
import SelectImage from "./SelectImage";
import PostBuilder from "./PostBuilder";
import Header from "./Header";

class CreatePostPage extends Component {
  //use componentdidmount to switch to small header by toggling className small-header?

  render() {
    return (
      <div className="create-post-page">
        <Header />
        <div className="create-post-container">
          <PostBuilder />
          <SelectImage />
        </div>
      </div>
    );
  }
}

export default CreatePostPage;
