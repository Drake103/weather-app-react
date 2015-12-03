import React from 'react';
import Component from '../../base/component';

export default class CurrentWeatherCard extends Component {
  render() {
    let info = this.props.weatherInfo;

    return (
      <div className='card orange lighten-2 weather-card'>
        <div className='card-content'>
          <span className='card-title'>{info.name}</span>
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{info.weather.main}</p>
          <p>{info.main.temp_min} - <span>{info.main.temp}</span> {info.main.temp_max}</p>
          <p>{info.dt}</p>
        </div>
      </div>);
  }
}
