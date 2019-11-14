import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  renderComposeMessage() {
    if (this.props.isSignedIn) {
      return "Compose a To-Do List!";
    } else {
      return "Compose Yours by Signing In";
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Listegy</h1>
        <p>
          <Link to="/lists" style={{ color: "#C70039" }}>
            Browse To-Do Lists
          </Link>
          <br /> or <br />
          {this.renderComposeMessage()}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Landing);
