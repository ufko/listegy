// Contains the ToDoListForm or ToDoListFormReview

import React, { Component } from "react";
import { reduxForm } from "redux-form";

import ToDoListForm from "./ToDoListForm";
import ToDoListFormReview from "./ToDoListFormReview";

class ToDoListNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ToDoListFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    } else {
      return (
        <ToDoListForm
          onListSubmit={() => this.setState({ showFormReview: true })}
        />
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: "todoListForm" })(ToDoListNew);
