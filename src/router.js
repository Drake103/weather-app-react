import BaseRouter from './base/router';
import vent from './modules/vent';
import HomeController from './controllers/home';
import WeatherController from './controllers/weather';

export default class Router extends BaseRouter {
  run() {
    super.run();
  }

  middleware() {

  }

  redirect() {

  }

  router() {
    this.route('/', 'home.index');
    this.route('/weather', 'weather.current');
    this.route('/weather/current', 'weather.current');
    this.route('/weather/forecast', 'weather.forecast');
  }
}

Router.prototype.controllers = {
  home: HomeController,
  weather: WeatherController,
};
