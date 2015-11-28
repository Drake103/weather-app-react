import _ from 'lodash';
import $ from 'jquery';
import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import config from '../config/default';
import langs from '../config/langs';
import alt from './alt';

window.Backbone = Backbone;
window.Backbone.LocalStorage = LocalStorage;
window.appNode = document.getElementById('app-node');
window.titleNode =  document.getElementsByTagName('title')[0];

let env = {
  lang: 'ru',
};

window.app = {
  env: env,
  langs: _.pick(langs, [env.lang]),
  config: config._client,
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
