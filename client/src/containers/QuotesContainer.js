import React, { Component } from "react";
import QuotesModel from "../models/Quotes";

class QuotesContainer extends Component {
  render() {
    QuotesModel.all().then(res => {
      console.log(res);
    });
    return (
      <div>
        <h2>This is the Quotes Container</h2>
      </div>
    );
  }
}

export default QuotesContainer;
