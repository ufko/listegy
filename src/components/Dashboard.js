import React from "react";
import { Link } from "react-router-dom";
import ToDoList from "./todo/ToDoList";

const Dashboard = () => {
  return (
    <div>
      <ToDoList />
      <div className="fixed-action-btn">
        <Link
          to="/todolist/new"
          className="ui right floated circular huge red icon button"
        >
          <i className="icon plus" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
