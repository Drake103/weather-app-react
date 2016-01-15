import _ from 'lodash';
import Backbone from 'backbone';
import config from 'config';

export default class CityCollection extends Backbone.Collection {
  constructor() {
    super();

    this.apiRoot = config.geonamesApi;
    this.count = 0;
    this.searchStr = null;
  }

  url() {
    return this.apiRoot + '/citiesJSON?q=' + this.searchStr + '&units=metric&appid=2de143494c0b295cca9337e1e96b00e0';
  }

  parse(resp) {
    this.city = resp.city;
    this.count = resp.count;

    _.forEach(resp.list, x => x.date = new Date(x.dt * 1000));

    return resp.list;
  }
}
