import React from 'react';
import Component from '../../base/component';
import CurrentWeatherCard from './current_weather_card';
import ForecastWeatherCityGroup from './forecast_weather_city_group';
import UserCitiesActions from '../../actions/user_cities';

export default class CityWeatherInfo extends Component {

  removeCity(city) {
    UserCitiesActions.removeCity(city);
  }

  render() {
    let city = this.props.city;
    return (
      <li className='city-weather-info-wrapper'>
        <div className='commands-panel'>
          <a className='btn btn-default btn-sm' onClick={this.removeCity.bind(this, city)}><i className='fa fa-times'></i></a>
        </div>
        <div className='city-weather-info'>
          <h3 className='city-header'>{city.name}, {city.countryCode} ({city.lng} {city.lat})</h3>
          <div className='city-weather-groups'>
            <CurrentWeatherCard city={city} />
            <ForecastWeatherCityGroup city={city} />
          </div>
        </div>
      </li>);
  }
}
