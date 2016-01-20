import _ from 'lodash';
import $ from 'jquery';
import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import clientConfig from '../config/client/default';
import langs from '../config/langs';
import alt from './alt';

window.Backbone = Backbone;
window.Backbone.LocalStorage = LocalStorage;
window.appNode = document.getElementById('app-node');
window.titleNode =  document.getElementsByTagName('title')[0];

// localStorage.clear();
// let cities = new LocalStorage('UserCityCollection');
// cities.create({ id: 1526273, geonameId: 1526273, name: 'Astana' });
// cities.create({ id: 2172797, geonameId: 2172797, name: 'Cairns' });
// cities.save();

let env = {
  lang: 'ru',
};

window.app = {
  env: env,
  langs: _.pick(langs, [env.lang]),
  config: clientConfig,
  stores: alt.flush(),
};

$.ajaxSetup({
  crossDomain: true,
  dataType: 'json',
  contentType: 'application/json',
  processData: false,
  beforeSend: function() {
    if (_.isObject(this.data) && this.type.toLowerCase() !== 'get') {
      this.data = JSON.stringify(this.data);
    }
  },
});

export default window;
