import alt from '../alt';
import CurrentWeatherActions from '../actions/current_weather';

class CurrentWeatherStore {
  constructor() {
    this.weatherInfos = [];

    this.bindListeners({
      handleUpdateCurrentWeather: CurrentWeatherActions.UPDATE_CURRENT_WEATHER,
    });
  }

  handleUpdateCurrentWeather(weatherInfos) {
    this.weatherInfos = weatherInfos;
  }
}

export default alt.createStore(CurrentWeatherStore);
