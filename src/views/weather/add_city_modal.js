import React from 'react';
import _ from 'lodash';
import Component from '../../base/component';
import Modal from 'simple-react-modal';
import CitiesStore from '../../stores/cities';
import CitiesActions from '../../actions/cities';
import vent from '../../modules/vent';

export default class AddCityModal extends Component {
  constructor() {
    super();

    _.bindAll(this, 'onChange', 'show', 'close');
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

  render() {
    let cities = this.state.cities || [];

    let cityOptions = _.map(cities, c => <li key={c.geonameId}>{c.name}</li>);

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
            <input type='text' onChange={this.onSearchStrChanged} />
          </div>
          <ul>
            {cityOptions}
          </ul>
        </div>
        <div className='modal-footer'></div>
      </Modal>);
  }
}
