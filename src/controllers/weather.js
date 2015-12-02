import Controller from '../base/controller';
import WeatherCurrentView from '../views/weather_current';
import WeatherForecastView from '../views/weather_forecast';
import CurrentWeather from '../collections/current_weather';
import Q from 'q';

export default class WeatherController extends Controller {
  current(ctx, done) {
    let currentWeather = new CurrentWeather();
    currentWeather.citiesIds = [524901, 703448, 2643743];

    this.xhrs.currentWeatherInfos = currentWeather.fetch();

    let dfd = Q.all([this.xhrs.currentWeatherInfos]);
    dfd.done(() => {
      this.setInitData({
        CurrentWeatherStore: {
          weatherInfos: currentWeather.toJSON(),
        },
      });

      this.renderView(WeatherCurrentView, done);
    });
  }

  forecast(ctx, done) {
    this.renderView(WeatherForecastView, done);
  }
}
