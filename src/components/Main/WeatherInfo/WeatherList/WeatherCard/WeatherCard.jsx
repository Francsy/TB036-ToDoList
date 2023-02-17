import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    return <article>
      <h2>{this.props.info.dt_txt}</h2>
      <img src={`https://openweathermap.org/img/w/${this.props.info.weather[0].icon}.png`} alt="icon" />
      <p>Temperature: {this.props.info.main.temp}°C</p>
      <p>Min: {this.props.info.main.temp_min}°C / Max: {this.props.info.main.temp_max}°C</p>
      <p>Humidity: {this.props.info.main.humidity}</p>
      <p><b>{this.props.info.weather[0].main}</b>: {this.props.info.weather[0].description}</p>
    </article>;
  }
}

export default WeatherCard;
