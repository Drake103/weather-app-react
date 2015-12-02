import React from 'react';
import Component from '../../base/component';

export default class ForecastWeatherDayInfo extends Component {
  render() {
    let dayInfo = this.props.dayInfo;

    return (
      <div className='card blue-grey darken-1 weather-card'>
        <div className='card-content white-text'>
          <span className='card-title'>{dayInfo.dt}</span>
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{dayInfo.weather.main}</p>
          <p>{dayInfo.main.temp_min} - <span>{dayInfo.main.temp}</span> {dayInfo.main.temp_max}</p>
        </div>
      </div>);
  }
}
