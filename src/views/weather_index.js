import React from 'react';
import _ from 'lodash';
import Component from '../base/component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CityWeatherInfo from './weather/city_weather_info';
import UserCitiesStore from '../stores/user_cities';
import UserCitiesActions from '../actions/user_cities';
import CurrentWeatherActions from '../actions/current_weather';
import Modal, {closeStyle} from 'simple-react-modal';

export default class WeatherIndexView extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange', 'show', 'close');
  }

  initState() {
    return UserCitiesStore.getState();
  }

  title() {
    return `${this.lang.brand.name} | ${this.lang.titles.index}`;
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    UserCitiesStore.listen(this.onChange);
    UserCitiesActions.fetchCities();
  }

  componentWillUnmount() {
    UserCitiesStore.unlisten(this.onChange);
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
            className='modal-base'
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close}>

            <div className='modal-heading'>
              <h5>Modal header</h5>
              <a className='btn-close' onClick={this.close.bind(this)}>
                <i className='fa fa-times'></i>
              </a>
            </div>
            <div className='modal-body'>
              <input type='text' />
              <ul>


              </ul>
            </div>
            <div className='modal-footer'></div>

          </Modal>
      </div>);
  }
}
