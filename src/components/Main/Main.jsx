import React, { Component } from "react";
import './Main.css'
import Home from './Home'
import ToDoList from './ToDoList';
import WeatherInfo from './WeatherInfo'
import { Route, Routes } from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoList/>} />
        <Route path="/weather" element={<WeatherInfo/>} />
      </Routes>
    </main>
  }
}

export default Main;
