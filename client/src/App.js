import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Images from "./components/Images";
import Quotes from "./components/Quotes";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NewPost from "./components/NewPost";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/images" component={Images} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/newpost" component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default App;
