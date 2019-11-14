import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import ToDoListNew from "./todo/ToDoListNew";
import ToDoListDetail from "./todo/ToDoListDetail";
import Dashboard from "./Dashboard";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/list/new" component={ToDoListNew} />
              <Route exact path="/list/:_id" component={ToDoListDetail} />
              <Route exact path="/lists" component={Dashboard} />
              <Route path="/lists/:_userId" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
