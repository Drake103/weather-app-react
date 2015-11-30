import React from 'react';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import WeatherCard from './components/weather_card';

export default class WeatherForecastView extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  render() {
    let weatherData = {
      date: new Date(),
      description: 'Sun',
      temp: 20,
      tempMin: -20,
      tempMax: 50,
    };

    return (
      <div className='container'>
        <Navbar />
          <ul className='collection'>
            <li className='collection-item'><WeatherCard weatherData={weatherData} /><WeatherCard weatherData={weatherData} /></li>
            <li className='collection-item'><WeatherCard weatherData={weatherData} /><WeatherCard weatherData={weatherData} /></li>
          </ul>
        <Footer />
      </div>);
  }
}
