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
    return this.apiRoot + '/searchJSON?q=' + this.searchStr + '&maxRows=10&username=' + config.geonamesApiUsername;
  }

  parse(resp) {
    this.count = resp.totalResultsCount;

    return resp.geonames;
  }
}
