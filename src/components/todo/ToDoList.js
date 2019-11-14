// this will contain the to do list cards in a grid
// which cards to show will be decided how?
// this can show all the lists or only the user's lists

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../../actions";
import ToDoListCard from "./ToDoListCard";

class ToDoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return <ToDoListCard key={todo.id} todo={todo} />;
    });
  }

  render() {
    return <div className="ui row">{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(ToDoList);
