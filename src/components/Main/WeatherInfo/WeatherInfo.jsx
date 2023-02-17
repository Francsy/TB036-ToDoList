import React, { Component } from "react";
import WeatherList from './WeatherList'

class WeatherInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: null,
      lat: null,
      lon: null
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((ubication) => {
        const lat = ubication.coords.latitude;
        const lon = ubication.coords.longitude;
        this.setState({ lat, lon });
      });
    } else {
      console.log('Not available ubi')
    }
  }

  searchCity = (event) => {
    event.preventDefault();
    const newCity = event.target.city.value;
    this.setState({ city: newCity })
  }

  render() {
    return <>
      <h1>Weather Info</h1>
      <form onSubmit={this.searchCity}>
        <label htmlFor="city">Your city:</label>
        <input type="text" name="city" />
        <input type="submit" value="Search" />
      </form>
      {(this.state.lat !== null && this.state.lon !== null) || this.state.city !== null ? 
        <WeatherList city={this.state.city} lat={this.state.lat} lon={this.state.lon} /> :
        <p>Loading...</p>}
    </>;
  }
}

export default WeatherInfo;


