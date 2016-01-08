import React from 'react';
import Component from '../../base/component';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer-wrapper'>
        <div className='footer-copyright'>
          <div className='container'>
          | 2016, Drake103
          <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
          </div>
        </div>
      </footer>);
  }
}
