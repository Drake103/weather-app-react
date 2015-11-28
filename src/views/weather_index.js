import React from 'react';
import Component from '../base/component';

export default class WeatherIndexView extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  render() {
    return (
      <div id='wrapper'>
        <div id='page-content-wrapper'>
        </div>
      </div>);
  }
}
