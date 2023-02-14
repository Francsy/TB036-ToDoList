import React, { Component } from "react";
import Item from './Item'
import {v4 as uuidv4} from 'uuid'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items : this.props.items // Sin usar hasta introducir método para que el child escuche el estado del parent
    }
  }

  printItemsList = () => this.props.items.map((item, i) => <Item text={item} index={i} removeItem={this.props.removeItem} key={uuidv4()} />)

  render() {
    return <section>
      <h2>List:</h2>
    <ul>
      {this.printItemsList()}
    </ul>
    </section>
  }
}

export default List;
