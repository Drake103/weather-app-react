import Controller from '../base/controller';
import WeatherIndexView from '../views/weather_index';
import UserCityCollection from '../collections/user_cities';
import Q from 'q';

export default class WeatherController extends Controller {
  index(ctx, done) {
    let cities = this.wrapModel(new UserCityCollection());
    this.setInitData({
      UserCitiesStore: {
        cities: cities.localStorage.findAll(),
      },
    });

    this.renderView(WeatherIndexView, done);
    return;

    this.xhrs.cities = cities.fetch();

    let dfd = Q.all([this.xhrs.cities]);
    dfd.done(() => {
      this.setInitData({
        UserCitiesStore: {
          cities: cities.toJSON(),
        },
      });

      this.renderView(WeatherIndexView, done);
    });
  }
}
