import React from 'react';
import Component from '../../base/component';
import ForecastWeatherDayInfo from './forecast_weather_day_info';
import _ from 'lodash';
import ForecastWeatherStore from '../../stores/forecast_weather';

export default class ForecastWeatherCityGroup extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange');
  }

  initState() {
    return ForecastWeatherStore.getState();
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    ForecastWeatherStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ForecastWeatherStore.unlisten(this.onChange);
  }

  render() {
    let city = this.props.city;
    let cityWeatherInfos = this.state.weatherInfoByCities[city.id];

    let dayWeatherInfos = _.map(cityWeatherInfos, di => <ForecastWeatherDayInfo key={di.dt} dayInfo={di} />);
    return (
      <div className='forecast-weather-group'>
        {dayWeatherInfos}
      </div>);
  }
}
