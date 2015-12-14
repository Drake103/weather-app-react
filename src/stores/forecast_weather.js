import alt from '../alt';
import ForecastWeatherActions from '../actions/forecast_weather';

class ForecastWeatherStore {
  constructor() {
    this.weatherInfoByCities = {};

    this.bindListeners({
      handleUpdateForeactWeather: ForecastWeatherActions.UPDATE_FORECAST_WEATHER,
      handleUpdateInfoForCity: ForecastWeatherActions.UPDATE_INFO_FOR_CITY,
    });
  }

  handleUpdateForeactWeather(weatherInfoByCities) {
    this.weatherInfoByCities = weatherInfoByCities;
  }

  handleUpdateInfoForCity(cityWeatherInfos) {
    this.weatherInfoByCities[cityWeatherInfos.cityId] = cityWeatherInfos.weatherInfos;
  }
}

export default alt.createStore(ForecastWeatherStore);
