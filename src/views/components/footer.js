import React from 'react';
import Component from '../../base/component';

export default class Footer extends Component {
  render() {
    return (
      <footer className='page-footer blue-grey lighten-2'>
        <div className='footer-copyright'>
          <div className='container'>
          © 2015 GAM
          <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
          </div>
        </div>
      </footer>);
  }
}
