import Backbone from 'backbone';
import config from 'config';
import LocalStorage from 'backbone.localstorage';

export default class UserCities extends Backbone.Collection {
  constructor() {
    super();

    this.apiRoot = config.openweathermapApi;
    this.count = 0;
    this.localStorage = new LocalStorage('UserCityCollection');
  }
}
