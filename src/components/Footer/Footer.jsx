import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (ubication) => {
        const lat = ubication.coords.latitude;
        const lon = ubication.coords.longitude;
        const data = await this.getData(lat, lon)
        this.setState({ data });
      });
    } else {
      console.log('Not available ubi')
    }
  }

  getData = async (lat, lon) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_W_API_KEY}&units=metric`);
    const data = await res.json();
    return data
  }

  printData = () => {
    if (this.state.data !== null) {
      return <p><img src={`https://openweathermap.org/img/w/${this.state.data.list[0].weather[0].icon}.png`} alt="icon" />{this.state.data.city.name} - {this.state.data.list[0].main.temp}°C</p>
    } else {
      return <p>Loading...</p>
    }
  }

  render() {
    return <footer>
      {this.printData()}
    </footer>
  }
}

export default Footer;
