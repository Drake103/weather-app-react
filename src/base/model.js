import Backbone from 'backbone';
import _ from 'lodash';
import config from 'config';
import $ from 'jquery';

export default class Model extends Backbone.Model {
  baseUrl() {
    return `${this.apiRoot}${_.result(this, 'urlPath')}`;
  }

  url() {
    let url = this.baseUrl();

    if (this.id) {
      url += `/${this.id}`;
    }

    return url;
  }
}

Model.prototype.$ = $.ajax;
Model.prototype.apiRoot = config.apiRoot || config._client.apiRoot;
Model.prototype.idAttribute = '_id';
