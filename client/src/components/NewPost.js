import React, { Component } from "react";

class NewPost extends Component {
  //define state

  render() {
    return (
      <div className="new-post-container">
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
    );
  }
}

export default NewPost;
