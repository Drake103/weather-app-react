import alt from '../alt';
import ForecastWeatherActions from '../actions/forecast_weather';

class ForecastWeatherStore {
  constructor() {
    this.weatherInfoByCities = {};

    this.bindListeners({
      handleUpdateForeactWeather: ForecastWeatherActions.UPDATE_FORECAST_WEATHER,
    });
  }

  handleUpdateForeactWeather(weatherInfoByCities) {
    this.weatherInfoByCities = weatherInfoByCities;
  }
}

export default alt.createStore(ForecastWeatherStore);
