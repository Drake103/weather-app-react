import React from 'react';
import { FormattedNumber, FormattedDate } from 'react-intl';
import Component from '../../base/component';
import CurrentWeatherStore from '../../stores/current_weather';
import _ from 'lodash';
import FormattedTemperature from '../components/formatted_temperature';

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
    let info = this.state.weatherInfos[city.geonameId];

    if (!info) {
      return (
        <div>Data is unavailable</div>
      );
    }

    let weatherList = _.map(info.weather, w => <li key={w.id}>{w.main} - {w.description}</li>);

    return (
      <div className='current-weather-group'>
        <div className='weather-day-info'>
          <span>Now</span>
          <p className='weather-icon'><i className='wi wi-day-sunny'></i></p>
          <ul>
            {weatherList}
          </ul>
          <p>
            <FormattedNumber value={info.main.temp_min} /> :: <span><FormattedNumber value={info.main.temp} /></span> :: <FormattedNumber value={info.main.temp_max} />
          </p>
        </div>
      </div>);
  }
}
