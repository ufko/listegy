import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
          Listegy
        </Link>
        <div className="right menu">
          {this.renderMyTodoListLink()}
          <Link to="/lists" className="item">
            All Lists
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
