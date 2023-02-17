import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/todo">To-Do List</Link>
      <br />
      <Link to="/weather">Weather Info</Link>


    </nav>;
  }
}

export default Nav;
