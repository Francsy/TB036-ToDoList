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
    return <li><p>{this.state.text}</p><button onClick={()=> this.props.removeItem(this.props.index)}>🗑️</button></li>;
  }
}

export default Item;
