import _ from 'lodash';
import $ from 'jquery';
import { Collection } from 'backbone';
import config from 'config';
import urlQuery from 'libs/url_query';

export default class BaseCollection extends Collection {
  url() {
    let params = {};
    let url = `${this.apiRoot}${_.result(this, 'urlPath')}`;

    if (this.order) {
      params.order = this.order;
    }

    if (this.filterModel) {
      params.filter = this.filterModel;
    }

    if (this.page) {
      params.page = this.page;
    }

    if (this.perPage) {
      params.perPage = this.perPage;
    }

    return urlQuery(url, params);
  }

  parse(resp) {
    this.total = resp.total;
    this.page = resp.page;
    this.perPage = resp.perPage;

    return resp.collection;
  }

  fetchCount() {
    let dfd = this.$(`${this.url()}/count`);
    dfd.done((resp) => {
      this.count = resp.count;
    });

    return dfd;
  }
}

BaseCollection.prototype.$ = $.ajax;
BaseCollection.prototype.apiRoot = config.apiRoot || config._client.apiRoot;
BaseCollection.prototype.idAttribute = '_id';
