import React from 'react';
import Component from '../../base/component';

export default class CityWeatherInfo extends Component {
  render() {
    let city = this.props.city;
    return (
      <li className='collection-item'>
        <p>{city.name}</p>
        <div></div>
      </li>);
  }
}
