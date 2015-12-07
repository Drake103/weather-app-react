import BaseRouter from './base/router';
import vent from './modules/vent';
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
    this.route('/', 'weather.index');
  }
}

Router.prototype.controllers = {
  weather: WeatherController,
};
