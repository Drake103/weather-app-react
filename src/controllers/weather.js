import Controller from '../base/controller';
import WeatherIndexView from '../views/weather_index';

export default class WeatherController extends Controller {
  index(ctx, done) {
    this.renderView(WeatherIndexView, done);
  }
}
