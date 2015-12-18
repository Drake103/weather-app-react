import React from 'react';
import Component from '../../base/component';
import { FormattedNumber, FormattedDate } from 'react-intl';
import FormattedTemperature from './formatted_temperature';

export default class ForecastWeatherDayInfo extends Component {
  render() {
    let dayInfo = this.props.dayInfo;

    return (
      <div className='card blue-grey darken-1 weather-card'>
        <div className='card-content white-text'>
          <FormattedDate value={dayInfo.date} />
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{dayInfo.weather.main}</p>
          <p>
            {dayInfo.temp.min}
            <span>{dayInfo.temp.day}</span>
            {dayInfo.temp.max}
          </p>
        </div>
      </div>);
  }
}
