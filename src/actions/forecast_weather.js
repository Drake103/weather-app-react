import alt from '../alt';
import ForecastWeatherCollection from '../collections/forecast_weather';
import Q from 'q';

class ForecastWeatherActions {
  constructor() {
    this.generateActions('updateForecastWeather', 'updateInfoForCity');
  }

  fetchByCity(cityId) {
    let forecastWeather = new ForecastWeatherCollection();
    forecastWeather.cityId = cityId;

    let xhrs = forecastWeather.fetch();
    var dfd = Q.all([xhrs]);

    dfd.done(() => {
      this.actions.updateInfoForCity({ cityId, weatherInfos: forecastWeather.toJSON() });
    });
  }
}

export default alt.createActions(ForecastWeatherActions);
