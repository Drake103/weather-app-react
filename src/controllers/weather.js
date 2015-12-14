import Controller from '../base/controller';
import WeatherIndexView from '../views/weather_index';
import CityCollection from '../collections/cities';
import Q from 'q';

export default class WeatherController extends Controller {
  index(ctx, done) {
    let cities = this.wrapModel(new CityCollection());
    this.setInitData({
      CitiesStore: {
        cities: cities.localStorage.findAll(),
      },
    });

    this.renderView(WeatherIndexView, done);
    return;

    this.xhrs.cities = cities.fetch();

    let dfd = Q.all([this.xhrs.cities]);
    dfd.done(() => {
      this.setInitData({
        CitiesStore: {
          cities: cities.toJSON(),
        },
      });

      this.renderView(WeatherIndexView, done);
    });
  }
}
