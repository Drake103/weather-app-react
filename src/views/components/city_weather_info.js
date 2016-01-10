import React from 'react';
import Component from '../../base/component';
import CurrentWeatherCard from './current_weather_card';
import ForecastWeatherCityGroup from './forecast_weather_city_group';

export default class CityWeatherInfo extends Component {
  render() {
    let city = this.props.city;
    return (
      <li className='city-weather-info-wrapper'>
        <div className='commands-panel'>
          <button />
          <button />
        </div>
        <div className='city-weather-info'>
          <h3 className='city-header'>{city.name}</h3>
          <div className='city-weather-groups'>
            <CurrentWeatherCard city={city} />
            <ForecastWeatherCityGroup city={city} />
          </div>
        </div>
      </li>);
  }
}
