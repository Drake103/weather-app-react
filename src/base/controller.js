import React from 'react';
import ReactDOM from 'react-dom';
import alt from '../alt';
import {IntlProvider} from 'react-intl';

export default class Controller {
  constructor() {
    this.xhrs = {};
  }

  // Fake method for client side
  // wrap all models and collections by this method
  wrapModel(model) {
    return model;
  }

  setInitData(data) {
    alt.bootstrap(JSON.stringify(data));
  }

  destroy() {
    for (let key in this.xhrs) {
      if (this.xhrs[key] !== 4) {
        this.xhrs[key].abort();
      }
    }
  }

  renderView(View, callback) {
    let view = ReactDOM.render(<IntlProvider locale='ru'><View /></IntlProvider>, window.appNode, callback);
    window.titleNode.innerText = view.title();
  }
}
