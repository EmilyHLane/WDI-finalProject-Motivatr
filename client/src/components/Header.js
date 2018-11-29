import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getJwt } from "../helpers/jwt";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "guest"
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    if (jwt) {
      this.setState({ user: "registered" });
    }
  }

  handleLogout() {
    return localStorage.removeItem("token");
  }

  render() {
    if (this.state.user === "guest") {
      return (
        <header className="big-header">
          <div className="logo-name-container">
            <Link to="/">
              <h1>motivatr</h1>
            </Link>
          </div>
          <div className="nav-container">
            <nav>
              {/* if user is not logged in */}
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign up</Link>
            </nav>
          </div>
        </header>
      );
    }
    return (
      <header>
        <div className="logo-name-container">
          <Link to="/">
            <h1>motivatr</h1>
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            {/* if user is logged in */}
            <Link to="/createpost">Create</Link>
            <Link to="/logout" onClick={this.handleLogout}>
              Logout
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
