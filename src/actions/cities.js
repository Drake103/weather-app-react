import alt from '../alt';

class CitiesActions {
  constructor() {
    this.generateActions('updateCities');
  }
}

export default alt.createActions(CitiesActions);
