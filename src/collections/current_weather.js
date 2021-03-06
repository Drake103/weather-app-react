import _ from 'lodash';
import Backbone from 'backbone';
import config from 'config';

export default class CurrentWeather extends Backbone.Collection {
  constructor() {
    super();

    this.apiRoot = config.openweathermapApi;
    this.count = 0;
    this.citiesIds = [];
  }

  url() {
    return this.apiRoot + '/group?id=' + this.citiesIds.join(',') + '&units=metric&appid=' + config.openweathermapApiKey;
  }

  parse(resp) {
    this.count = resp.cnt;
    _.forEach(resp.list, x => x.date = new Date(x.dt * 1000));

    return resp.list;
  }
}
