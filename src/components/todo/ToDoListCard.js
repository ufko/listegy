//This will be in ToDoList component which is in dashboard
// When clicked it will direct to todolistdetail component

import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";

const ToDoListCard = ({ todo }) => {
  return (
    <div className="ui four wide column">
      <Link to={`/lists/${todo.id}`} className="ui raised link card">
        <div className="content">
          <img
            alt="User avatar"
            className="left floated circular mini ui image"
            src={faker.image.avatar()}
          />
          <div className="header">{todo.title}</div>
          <div className="meta">
            <span className="category">Owner: {todo.userId}</span>
          </div>
          <div className="description">
            <p>List description lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToDoListCard;
