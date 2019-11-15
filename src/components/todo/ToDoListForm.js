//When user creates a new list this component will be shown

import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, FieldArray } from "redux-form";

import formFields from "./formFields";

class ToDoListForm extends Component {
  render() {
    return (
      <div className="ui form">
        <h4 className="ui dividing header">New To Do List</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onListSubmit)}>
          {this.renderStaticFormFields()}
          <h4 className="ui dividing header"> </h4>
          {this.renderDynamicFormFields()}
          <h4 className="ui dividing header"> </h4>
          <Link to="/lists" className="ui small red left floated button">
            <i className="ui icon arrow circle left"></i>
            Cancel
          </Link>
          <button type="submit" className="ui small teal right floated button">
            Review
            <i className="ui icon arrow circle right"></i>
          </button>
        </form>
      </div>
    );
  }

  renderStaticFormFields() {
    return _.map(formFields, ({ name, label, placeholder }) => {
      return (
        <Field
          key={name}
          name={name}
          label={label}
          placeholder={placeholder}
          type="text"
          component={this.renderStaticField}
        />
      );
    });
  }

  renderStaticField = props => {
    const {
      input,
      label,
      placeholder,
      type,
      meta: { touched, error }
    } = props;

    return (
      <div className="field">
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={placeholder} />
          {touched && error && (
            <div className="ui negative message">{error}</div>
          )}
        </div>
      </div>
    );
  };

  renderDynamicFormFields() {
    return <FieldArray name="todos" component={this.renderDynamicTodoList} />;
  }

  renderDynamicTodoList = props => {
    return (
      <div>
        {this.renderAddToDoButton(props)}
        {this.renderFirstTodoFormField(props)}
        {this.renderTodoFormField(props)}
      </div>
    );
  };

  renderAddToDoButton = props => {
    const { fields } = props;

    return (
      <div>
        <button
          className="ui right floated button"
          type="button"
          onClick={() => fields.push({})}
        >
          <i className="plus icon" />
          Add To-Do
        </button>
      </div>
    );
  };

  renderFirstTodoFormField = props => {
    const {
      meta: { submitFailed, error }
    } = props;
    console.log("first", props);
    return (
      <div className="field">
        <label>To-Dos</label>
        <div className="ui icon input">
          <Field
            name="firstTodo"
            type="text"
            placeholder="What to do?"
            component="input"
          />
        </div>
        {submitFailed && error && (
          <div className="ui negative message">{error}</div>
        )}
      </div>
    );
  };

  renderTodoFormField = props => {
    const {
      fields,
      meta: { touched, error }
    } = props;
    return (
      <div>
        {fields.map((todo, index) => (
          <div className="field" key={index}>
            <div className="ui icon input">
              <Field
                name={`${todo}.detail`}
                type="text"
                label="New To-Do"
                placeholder="What to do?"
                component="input"
              />
              {touched && error && (
                <div className="ui negative message">{error}</div>
              )}
              <button
                className="ui right floated button"
                type="button"
                title="Remove To Do"
                onClick={() => fields.remove(index)}
              >
                <i className="trash icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
}

const validate = values => {
  console.log("values", values);
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  if (!values.firstTodo) {
    errors.todos = { _error: "At least one to do must be entered" };
    errors.todos.firstTodo = "At least one to do must be entered";
  }

  if (values.todos && values.todos.length > 0) {
    const todosArrayErrors = [];
    values.todos.forEach((todo, todoIndex) => {
      const todoErrors = {};
      if (!todo || !todo.detail) {
        todoErrors.detail = "You must provide a value";
        todosArrayErrors[todoIndex] = todoErrors;
      }
    });
    if (todosArrayErrors.length) {
      errors.todos = todosArrayErrors;
    }
  }
  console.log("errors", errors);

  return errors;
};

export default reduxForm({ validate, form: "todoListForm" })(ToDoListForm);
