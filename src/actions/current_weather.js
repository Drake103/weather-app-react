import alt from '../alt';

class CurrentWeatherActions {
  constructor() {
    this.generateActions('updateCurrentWeather');
  }
}

export default alt.createActions(CurrentWeatherActions);
