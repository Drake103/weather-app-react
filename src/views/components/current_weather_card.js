import React from 'react';
import Component from '../../base/component';
import CurrentWeatherStore from '../../stores/current_weather';
import _ from 'lodash';

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
