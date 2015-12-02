import _ from 'lodash';
import React from 'react';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ForecastWeatherCityGroup from './components/forecast_weather_city_group';
import ForecastWeatherStore from '../stores/forecast_weather';

export default class WeatherForecastView extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  initState() {
    return ForecastWeatherStore.getState();
  }

  render() {
    let cities = [{id: 524901, name: 'Moscow'}];

    let cityGroups = _.map(cities, city => <ForecastWeatherCityGroup key={city.id} city={city} />);

    return (
      <div className='container'>
        <Navbar />
        <ul className='collection'>
          {cityGroups}
        </ul>
        <Footer />
      </div>);
  }
}
