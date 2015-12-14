import React from 'react';
import Component from '../../base/component';
import CurrentWeatherCard from './current_weather_card';
import ForecastWeatherCityGroup from './forecast_weather_city_group';

export default class CityWeatherInfo extends Component {
  render() {
    let city = this.props.city;
    return (
      <li className='collection-item'>
        <p>{city.name}</p>
        <div>
          <CurrentWeatherCard city={city} />
          <ForecastWeatherCityGroup city={city} />
        </div>
      </li>);
  }
}
