import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Listegy
      </Link>
      <div className="right menu">
        <Link to="/todolist" className="item">
          To-Do Lists
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
