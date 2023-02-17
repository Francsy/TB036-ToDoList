import React, { Component } from "react";
import List from './List'
import tasks from './tasks.json'
import './ToDoList.css'

class ToDoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      newTask: '',
      taskAdded: false
    }
    this.newItem = React.createRef();
  }

  componentDidMount() {
    this.setState({ items: tasks })
  }


  handleInputText = (event) => {
      this.setState({ newTask: event.target.value })
      if (event.target.value.length > 0){
      setTimeout(this.deleteInput, 20000)
    }
  }

  deleteInput = () => this.setState({newTask: ''})

  addItem = () => {
    if (this.newItem.current.value.length >= 6) {
      if (this.state.items === []) {
        this.setState({ items: [this.newItem.current.value] })
      } else {
        this.setState({ items: [this.newItem.current.value, ...this.state.items], taskAdded: true })
      }
      this.setState({ newTask: '' })
      setTimeout(() =>this.setState({taskAdded: false}), 5000)
      
    } else {
      alert('Your task should have at least 6 characters')
    }
  }

  clearList = () => this.setState({ items: [] })

  reset = () => this.setState({ items: tasks })

  deleteTask = (i) => {
    const remainingTasks = this.state.items.filter((task, j) => i !== j)
    this.setState({ items: remainingTasks })
  }

  render() {
    return <>
      <h1>TO-DO LIST</h1>
      <section>
        <h2>Add tasks:</h2>
        <input type="text" ref={this.newItem} value={this.state.newTask} onChange={this.handleInputText} />
        {this.state.newTask.length > 0 ? <button onClick={this.addItem}>ADD</button> : <></>}
        {this.state.taskAdded ? <p>A new task was added!</p> : <></>}
      </section>
      <section>
        <button onClick={this.clearList}>CLEAR LIST</button>
        <button onClick={this.reset}>RESET</button>
      </section>

      <List items={this.state.items} removeItem={this.deleteTask} />
    </>
  }
}

export default ToDoList;