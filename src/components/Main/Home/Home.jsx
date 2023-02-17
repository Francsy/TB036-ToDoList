import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    return <>
    <h1>Welcome back!</h1>
    <Link to="/todo"><button>Bring me to my tasks</button></Link>
    </>
  }
}

export default Home;
