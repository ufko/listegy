// This will contain one specific list and
// when a to do list card is clicked this component will be shown
// according to the list id

import React, { Component } from "react";
import { connect } from "react-redux";
import faker from "faker";

import { fetchSingleTodo } from "../../actions";

class ToDoListDetail extends Component {
  componentDidMount() {
    this.props.fetchSingleTodo(this.props.match.params._id);
  }

  renderToDoDetails() {
    const { todo } = this.props;
    return (
      <div className="ui fluid raised card">
        <div className="content">
          <div>
            <img
              alt="User avatar"
              className="left floated circular mini ui image"
              src={faker.image.avatar()}
            />
          </div>
          <div>
            <h1>List Title: {todo.title}</h1>
            <p>List Id: {todo.id}</p>
            <p>Owner:{todo.userId}</p>
            <p>To-Do Completed ? {todo.completed ? "Yes!" : "No :("}</p>
          </div>
        </div>
        <div className="content">
          <div class="ui relaxed divided list">
            <div class="item">
              <i class="large github middle aligned icon"></i>
              <div class="content">
                <p class="header">Semantic-Org/Semantic-UI</p>
                <div class="description">Updated 10 mins ago</div>
              </div>
            </div>
            <div class="item">
              <i class="large github middle aligned icon"></i>
              <div class="content">
                <p class="header">Semantic-Org/Semantic-UI-Docs</p>
                <div class="description">Updated 22 mins ago</div>
              </div>
            </div>
            <div class="item">
              <i class="large github middle aligned icon"></i>
              <div class="content">
                <p class="header">Semantic-Org/Semantic-UI-Meteor</p>
                <div class="description">Updated 34 mins ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui middle aligned two column centered grid">
        <div className="column">{this.renderToDoDetails()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todo: state.singleTodo };
};

export default connect(
  mapStateToProps,
  { fetchSingleTodo }
)(ToDoListDetail);
