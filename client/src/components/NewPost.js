import React, { Component } from "react";

class NewPost extends Component {
  //define state

  render() {
    return (
      <div className="create-post-page">
        <h2>Create a post</h2>
        <div className="create-post-container">
          <input
            className="post-text-placeholder text-top"
            type="text"
            name="post text top"
            value=""
            placeholder="Add text here"
          />
          <div className="post-image-placeholder">Image placeholder</div>
          <input
            className="post-text-placeholder text-bottom"
            type="text"
            name="post text bottom"
            value=""
            placeholder="Add text here"
          />
          <button className="post-done">Done</button>
          <button className="post-cancel">Cancel</button>
        </div>
      </div>
    );
  }
}

export default NewPost;
