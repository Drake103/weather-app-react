import alt from '../alt';
import UserCitiesActions from '../actions/user_cities';
import CurrentWeatherActions from '../actions/current_weather';
import ForecastWeatherActions from '../actions/forecast_weather';
import _ from 'lodash';

class UserCitiesStore {
  constructor() {
    this.cities = [];

    this.bindListeners({
      handleUpdateCities: UserCitiesActions.UPDATE_CITIES,
    });
  }

  handleUpdateCities(cities) {
    this.cities = cities;

    let citiesIds = _.map(cities, c => c.id);
    CurrentWeatherActions.fetchCurrentWeather(citiesIds);

    _.forEach(citiesIds, cityId => ForecastWeatherActions.fetchByCity(cityId));
  }
}

export default alt.createStore(UserCitiesStore);
