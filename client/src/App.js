import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import CreatePostPage from "./components/CreatePostPage";
import QuoteFinder from "./components/QuoteFinder";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createpost" component={CreatePostPage} />
          <Route exact path="/quotefinder" component={QuoteFinder} />
        </Switch>
      </div>
    );
  }
}

export default App;
