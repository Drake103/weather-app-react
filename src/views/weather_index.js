import React from 'react';
import _ from 'lodash';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CityWeatherInfo from './weather/city_weather_info';
import CitiesStore from '../stores/cities';
import CitiesActions from '../actions/cities';
import CurrentWeatherActions from '../actions/current_weather';
import Modal, {closeStyle} from 'simple-react-modal';

export default class WeatherIndexView extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange', 'show', 'close');
  }

  initState() {
    return CitiesStore.getState();
  }

  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    CitiesStore.listen(this.onChange);
    CitiesActions.fetchCities();
  }

  componentWillUnmount() {
    CitiesStore.unlisten(this.onChange);
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    let cities = this.state.cities || [];
    let cityGroups = _.map(cities, city => <CityWeatherInfo key={city.id} city={city} />);

    return (
      <div className='page-wrapper'>
        <Navbar />
        <div className='content-wrapper'>
          <div className='sidebar-right'>
            <div className='panel'>
              <div className='panel-heading'>Tools</div>
              <div className='panel-body'>
                <ul>
                  <li><a onClick={this.show}>Add city</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='content-body weather-index'>
            <ul className='cities-list'>
              {cityGroups}
            </ul>
          </div>
        </div>
        <Footer />
          <Modal
            className="test-class" //this will completely overwrite the default css completely
            style={{ background: 'red' }} //overwrites the default background
            containerStyle={{ background: 'blue' }} //changes styling on the inner content area
            containerClassName="test"
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close}>

            <a style={closeStyle} onClick={this.close}>X</a>
            <div>hey</div>

          </Modal>
      </div>);
  }
}
