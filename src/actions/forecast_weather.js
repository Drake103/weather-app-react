import alt from '../alt';

class ForecastWeatherActions {
  constructor() {
    this.generateActions('updateForecastWeather');
  }
}

export default alt.createActions(ForecastWeatherActions);
