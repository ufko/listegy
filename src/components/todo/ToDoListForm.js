//When user creates a new list this component will be shown

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";

class ToDoListForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onListSubmit)}>
          <Link to="/lists" className="ui small red button">
            <i className="ui icon arrow circle left"></i>
            Cancel
          </Link>
          <button type="submit" className="ui small teal button">
            Next
            <i className="ui icon arrow circle right"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "todoListForm" })(ToDoListForm);
