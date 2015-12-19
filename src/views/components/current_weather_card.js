import React from 'react';
import { FormattedNumber, FormattedDate } from 'react-intl';
import Component from '../../base/component';
import CurrentWeatherStore from '../../stores/current_weather';
import _ from 'lodash';
import FormattedTemperature from './formatted_temperature';

export default class CurrentWeatherCard extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange');
  }

  initState() {
    return CurrentWeatherStore.getState();
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    CurrentWeatherStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CurrentWeatherStore.unlisten(this.onChange);
  }

  render() {
    let city = this.props.city;
    let info = this.state.weatherInfos[city.id];

    if (!info) {
      return (
        <div>Data is unavailable</div>
      );
    }

    return (
      <div className='current-weather-group'>
        <div className='card-panel orange weather-card'>
          <span>Now</span>
          <p><img src='/images/weather/weather-clear.png' /></p>
          <p>{info.weather.main}</p>
          <p>
            <FormattedNumber value={info.main.temp_min} /> - <span>{info.main.temp}</span> {info.main.temp_max}
          </p>
        </div>
      </div>);
  }
}
