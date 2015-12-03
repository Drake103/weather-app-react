import React from 'react';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CurrentWeatherCard from './components/current_weather_card';
import CurrentWeatherStore from '../stores/current_weather';
import _ from 'lodash';

export default class WeatherCurrentView extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  initState() {
    return CurrentWeatherStore.getState();
  }

  render() {
    let weatherInfos = [
      {
        coord: {lon:37.62, lat:55.75},
        sys: {type:1, id:7323, message:0.0427, country:'RU', sunrise:1448948098, sunset:1448974933},
        weather:[{id:620, main:'Snow', description:'light shower snow', icon:'13d'}],
        main:{temp:1, pressure:996, temp_min:1, temp_max:1, humidity:95},
        visibility:6000,
        wind:{speed:5, deg:190},
        clouds:{all:90},
        dt:1448974800,
        id:524901,
        name:'Moscow', },
    ];

    weatherInfos = this.state.weatherInfos;

    let weatherCards = _.map(weatherInfos, wi => <CurrentWeatherCard key={wi.id} weatherInfo={wi} />);

    return (
      <div>
        <Navbar />
        <div className='current-weather-group'>
          {weatherCards}
        </div>
        <Footer />
      </div>);
  }
}
