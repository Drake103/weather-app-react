import _ from 'lodash';
import Backbone from 'backbone';
import config from 'config';

export default class ForecastWeather extends Backbone.Collection {
  constructor() {
    super();

    this.apiRoot = config.openweathermapApi;
    this.count = 0;
    this.cityId = null;
  }

  url() {
    return this.apiRoot + '/forecast/daily?id=' + this.cityId + '&units=metric&appid=' + config.openweathermapApiKey;
  }

  parse(resp) {
    this.city = resp.city;
    this.count = resp.count;

    _.forEach(resp.list, x => x.date = new Date(x.dt * 1000));

    return resp.list;
  }
}
