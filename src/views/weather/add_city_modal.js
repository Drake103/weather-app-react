import React from 'react';
import _ from 'lodash';
import Component from '../../base/component';
import Modal from 'simple-react-modal';
import CitiesStore from '../../stores/cities';
import CitiesActions from '../../actions/cities';
import UserCitiesActions from '../../actions/user_cities';
import vent from '../../modules/vent';

export default class AddCityModal extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange', 'show', 'close', 'addCity');
    this.onSearchStrChanged = _.debounce(this.onSearchStrChanged, 1000);
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

    vent.on('showAddCityModal', () => {
      this.show();
    });
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

  onSearchStrChanged(evt) {
    let searchStr = evt.target.value;
    CitiesActions.fetchCities(searchStr);
  }

  addCity(city) {
    UserCitiesActions.addCity(city);
    this.close();
  }

  render() {
    let cities = this.state.cities || [];

    let cityOptions = _.map(cities, c => <CityListItem key={c.geonameId} addCityHandler={this.addCity} city={c}></CityListItem>);

    return (
      <Modal
        className='modal-base'
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.close}>

        <div className='modal-heading'>
          <h5>Add city</h5>
          <a className='btn-close' onClick={this.close.bind(this)}>
            <i className='fa fa-times'></i>
          </a>
        </div>
        <div className='modal-body'>
          <div>
            <input type='text' placeholder='Enter city name' onChange={this.onSearchStrChanged} />
          </div>
          <ul className='cities-list'>
            {cityOptions}
          </ul>
        </div>
        <div className='modal-footer'></div>
      </Modal>);
  }
}

class CityListItem extends Component {
  onItemClicked(city) {
    this.props.onCityClicked(city);
  }

  render() {
    let city = this.props.city;
    let onCityClicked = this.props.addCityHandler;

    return (
      <li onClick={onCityClicked.bind(this, city)}>
        {city.name}
      </li>
    );

  }
}
