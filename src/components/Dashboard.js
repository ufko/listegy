import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ToDoList from "./todo/ToDoList";

class Dashboard extends Component {
  renderButton() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link
            to="/lists/new"
            className="ui right floated circular huge red icon button"
          >
            <i className="icon plus" />
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="ui stackable vertically divided grid">
          <ToDoList />
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Dashboard);
