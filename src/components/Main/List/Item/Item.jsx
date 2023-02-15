import React, { Component } from "react";
import './Item.css'

class Item extends Component {
    constructor(props) {
    super(props)
    this.state = {
      text : this.props.text
    }
  }
  render() {
    return <li><h3>Tarea {this.props.index + 1}</h3><p>{this.state.text}</p><button onClick={this.props.removeItem}>🗑️</button></li>;
  }
}

export default Item;
