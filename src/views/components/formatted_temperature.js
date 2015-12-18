import React from 'react';
import Component from '../../base/component';

function kelvin2celsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

export default class FormattedTemperature extends Component {

  render() {
    let kelvin = this.props.temperature;

    return (
      <span>
        {kelvin2celsius(kelvin)}℃
      </span>
    );
  }
}
