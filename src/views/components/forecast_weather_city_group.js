import React from 'react';
import Component from '../../base/component';
import ForecastWeatherDayInfo from './forecast_weather_day_info';
import _ from 'lodash';

export default class ForecastWeatherCityGroup extends Component {

  render() {
    let cityWeatherInfo = this.props.cityWeatherInfo;
    cityWeatherInfo = {};
    cityWeatherInfo.list = [
      {
        dt:1449068400,
        main: {
          temp:270.79,
          temp_min:269.201,
          temp_max:270.79,
          pressure:1003.83,
          sea_level:1024.56,
          grnd_level:1003.83,
          humidity:92,
          temp_kf:1.59,
        },
        weather:[{id:600, main:'Snow', description:'light snow', icon:'13n'}],
        clouds:{all:76},
        wind:{speed:1.21, deg:211.5},
        snow:{'3h':0.0725},
        sys:{pod:'n'},
        dt_txt:'2015-12-02 15:00:00',
      },
    ];

    let dayWeatherInfos = _.map(cityWeatherInfo.list, di => <ForecastWeatherDayInfo key={di.dt} dayInfo={di} />);
    return (
      <li className='collection-item'>
        {dayWeatherInfos}
      </li>);
  }
}
