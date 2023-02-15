import React, { Component } from "react";
import List from './List'
import tasks from './tasks.json'
import './Main.css'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: tasks
    }
    this.newItem = React.createRef();
  }

  addItem = () => {
    if (this.newItem.current.value !== '') {
      if (this.state.items === []) {
        this.setState({ items: [this.newItem.current.value] })
      } else {

        this.setState({ items: [...this.state.items, this.newItem.current.value] })
      }
    } 
  }

  clearList = () => this.setState({ items: [] })
  reset = () => this.setState({ items: tasks })
  deleteTask = (i) => {
    const remainingTasks = this.state.items.filter((task, j) => i !== j)
    this.setState({ items: remainingTasks })
  }

  render() {
    return <main>
      <section>
        <h2>Add tasks:</h2>
        <input type="text" ref={this.newItem} />
        <button onClick={this.addItem}>ADD</button>
      </section>
      <section>
        <button onClick={this.clearList}>CLEAR LIST</button>
        <button onClick={this.reset}>RESET</button>
      </section>
      <List items={this.state.items} removeItem={this.deleteTask} />
    </main>
  }
}

export default Main;
