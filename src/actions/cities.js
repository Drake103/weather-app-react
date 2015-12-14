import alt from '../alt';
import CityCollection from '../collections/cities';

class CitiesActions {
  constructor() {
    this.generateActions('updateCities');
  }

  fetchCities() {
    let cities = new CityCollection();
    this.actions.updateCities(cities.localStorage.findAll());
  }
}

export default alt.createActions(CitiesActions);
