import React from 'react';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default class HomeIndexView extends Component {
  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id='page-content-wrapper' height='800'>
        </div>
        <Footer />
      </div>);
  }
}
