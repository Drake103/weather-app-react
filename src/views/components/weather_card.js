import React from 'react';
import Component from '../../base/component';

export default class WeatherCard extends Component {
  render() {
    let wData = this.props.weatherData;

    return (
      <div className='card blue-grey darken-1 weather-card'>
        <div className='card-content white-text'>
          <span className='card-title'>{wData.date.toString}</span>
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{wData.description}</p>
          <p>{wData.tempMin} - <span>{wData.temp}</span> {wData.tempMax}</p>
        </div>
      </div>);
  }
}
