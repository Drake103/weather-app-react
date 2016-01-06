import React from 'react';
import _ from 'lodash';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CityWeatherInfo from './components/city_weather_info';
import CitiesStore from '../stores/cities';
import CitiesActions from '../actions/cities';
import CurrentWeatherActions from '../actions/current_weather';

export default class WeatherIndexView extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange');
  }

  initState() {
    return CitiesStore.getState();
  }

  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    CitiesStore.listen(this.onChange);
    CitiesActions.fetchCities();
  }

  componentWillUnmount() {
    CitiesStore.unlisten(this.onChange);
  }

  render() {
    let cities = this.state.cities || [];
    let cityGroups = _.map(cities, city => <CityWeatherInfo key={city.id} city={city} />);

    return (
      <div className='page-wrapper'>
        <Navbar />
        <div className='content-wrapper'>
          <ul className='collection'>
            {cityGroups}
          </ul>
        </div>
        <Footer />
      </div>);
  }
}
