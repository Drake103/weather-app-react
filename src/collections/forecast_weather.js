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
    return this.apiRoot + '/forecast?id=' + this.cityId + '&appid=2de143494c0b295cca9337e1e96b00e0';
  }

  parse(resp) {
    this.city = resp.city;
    this.count = resp.count;

    return resp.list;
  }
}
