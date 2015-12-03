import React from 'react';
import Component from '../../base/component';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper blue-grey lighten-2'>
          <a href='/' className='brand-logo'>{this.lang.brand.name}</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><a href='/weather/current'>{this.lang.links.currentWeather}</a></li>
            <li><a href='/weather/forecast'>{this.lang.links.forecastWeather}</a></li>
          </ul>
        </div>
      </nav>);
  }
}
