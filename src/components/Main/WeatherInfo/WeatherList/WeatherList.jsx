import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import { v4 as uuidv4 } from 'uuid'

class WeatherList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  async componentDidMount() {
    const weatherData = await this.getWeatherByUbi(this.props.lat, this.props.lon);
    // const weatherData = await this.getWeatherByCity(this.props.city);
    this.setState({
      data: weatherData,
      loading: false
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.setState({ loading: true })
      const newWeatherData = await this.getWeatherByCity(this.props.city);
      this.setState({
        data: newWeatherData,
        loading: false
      })
    }
  }

  getWeatherByCity = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_W_API_KEY}&units=metric`)
    const data = await res.json()
    return data
  }

  getWeatherByUbi = async (lat, lon) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_W_API_KEY}&units=metric`)
    const data = await res.json()
    return data
  }

  printWeatherInfo = () => {
    if (this.state.loading) {
      return <p>Loading...</p>
    } else if (this.state.data.cod === '200') {
      return <>
      <h2>{this.state.data.city.name}</h2>
      {this.state.data.list.map(card => <WeatherCard info={card} key={uuidv4()} />)}
      </>
    } else {
      return <h2>{this.state.data.message}</h2>
    }
  }


  render() {
    return <section>
      {this.printWeatherInfo()}
    </section>;
  }
}

/* 
render() {
  return <section>
    {this.props.city ?
    <h2>{this.props.city}:</h2> 
    : <><h2>Current Position</h2><p>Latitude: {this.props.lat} - Longitude: {this.props.lon}</p></>}
    {this.printWeatherInfo()}
  </section>;
}
 */
export default WeatherList;
