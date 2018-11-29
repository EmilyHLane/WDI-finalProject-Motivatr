import React, { Component } from "react";
import Image from "./Image";
import axios from "axios";

const KEY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_UNSPLASH_KEY
    : require("../config/keys").US_KEY.REACT_APP_UNSPLASH_KEY;

class SelectImage extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/?client_id=${KEY}`).then(res => {
      const images = res.data;
      this.setState({ images });
    });
  }

  render() {
    return (
      <div className="select-image-container col-2">
        <h3>Select an Image</h3>
        <Image images={this.state.images} />
      </div>
    );
  }
}

export default SelectImage;
