import Controller from '../base/controller';
import WeatherCurrentView from '../views/weather_current';
import WeatherForecastView from '../views/weather_forecast';

export default class WeatherController extends Controller {
  current(ctx, done) {
    this.renderView(WeatherCurrentView, done);
  }

  forecast(ctx, done) {
    this.renderView(WeatherForecastView, done);
  }
}
