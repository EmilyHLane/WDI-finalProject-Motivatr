import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        //pass token in header
        setAuthToken(token);
        if (token) {
          this.props.history.push("/");
        } else {
          alert("sorry try again");
        }
      })
      .catch(err => {
        alert("wrong email or password, try again");
      });
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <h2>Log In</h2>
          <Link to="/" className="close-button">
            x
          </Link>
          <form className="login-form" onSubmit={e => this.submit(e)}>
            <label>email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={e => this.change(e)}
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={e => this.change(e)}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
