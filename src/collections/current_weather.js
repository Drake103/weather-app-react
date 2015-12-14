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
    return this.apiRoot + '/group?id=' + this.citiesIds.join(',') + '&units=metric&appid=2de143494c0b295cca9337e1e96b00e0';
  }

  parse(resp) {
    this.count = resp.cnt;
    return resp.list;
  }
}
