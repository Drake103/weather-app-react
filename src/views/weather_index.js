import React from 'react';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CityWeatherInfo from './components/city_weather_info';
import _ from 'lodash';

export default class WeatherIndex extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  render() {
    let cities = [{id: 524901, name: 'Moscow'}];
    let cityGroups = _.map(cities, city => <CityWeatherInfo key={city.id} city={city} />);

    return (
      <div>
        <Navbar />
        <ul className='collection'>
          {cityGroups}
        </ul>
        <Footer />
      </div>);
  }
}
