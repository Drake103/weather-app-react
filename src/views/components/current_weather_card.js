import React from 'react';
import Component from '../../base/component';

export default class CurrentWeatherCard extends Component {
  render() {
    let info = this.props.weatherInfo;

    return (
      <div className='card blue-grey darken-1 weather-card'>
        <div className='card-content white-text'>
          <p>{info.name}</p>
          <span className='card-title'>{info.dt}</span>
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{info.weather.main}</p>
          <p>{info.main.temp_min} - <span>{info.main.temp}</span> {info.main.temp_max}</p>
        </div>
      </div>);
  }
}
