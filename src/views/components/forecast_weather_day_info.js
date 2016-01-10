import React from 'react';
import Component from '../../base/component';
import { FormattedNumber, FormattedDate } from 'react-intl';
import FormattedTemperature from './formatted_temperature';

export default class ForecastWeatherDayInfo extends Component {
  render() {
    let dayInfo = this.props.dayInfo;

    return (
      <div className='weather-day-info'>
        <FormattedDate value={dayInfo.date} />
        <p><i className='wi wi-day-sunny'></i></p>
        <p>{dayInfo.weather.main}</p>
        <p>
          <FormattedNumber value={dayInfo.temp.min} /> :: <span><FormattedNumber value={dayInfo.temp.day} /></span> :: <FormattedNumber value={dayInfo.temp.max} />
        </p>
      </div>);
  }
}
