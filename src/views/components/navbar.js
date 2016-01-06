import React from 'react';
import Component from '../../base/component';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navigation-wrapper'>
        <a href='/' className='logo'>{this.lang.brand.name}</a>
        <nav role="navigation">
          <ul className='navigation-menu show'>
              <li className='nav-link'><a href='https://github.com/Drake103/weather-app-react'>{this.lang.links.github}</a></li>
          </ul>
        </nav>
      </div>);
  }
}
