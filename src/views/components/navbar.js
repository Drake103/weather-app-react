import React from 'react';
import Component from '../../base/component';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='nav-wrapper blue-grey lighten-2'>
        <div className='container'>
          <a href='/' className='brand-logo'>{this.lang.brand.name}</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><a href='https://github.com/Drake103/weather-app-react'>{this.lang.links.github}</a></li>
          </ul>
        </div>
      </nav>);
  }
}
