import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  renderMyTodoListLink() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/lists/:_userId" className="item">
          My Lists
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <div id="desktop-logo">
            <img alt="Listegy" className="ui small image" src="logo.png" />
          </div>
          <div id="mobile-logo">
            <img alt="Listegy" className="ui mini image" src="mobilelogo.png" />
          </div>
        </Link>
        <div className="right menu">
          {this.renderMyTodoListLink()}
          <Link to="/lists" className="item">
            All Lists
          </Link>
          <GoogleAuth className="item" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
