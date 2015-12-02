import Backbone from 'backbone';

export default class CityForecastWeather extends Backbone.Model {
  constructor() {
    super();
  }

  url() {
    return this.apiRoot + '/forecast?id=524901&appid=2de143494c0b295cca9337e1e96b00e0';
  }
}
