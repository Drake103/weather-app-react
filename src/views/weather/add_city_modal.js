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

  render() {
    let cities = this.state.cities || [];

    return (
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
      </Modal>);
  }
}
