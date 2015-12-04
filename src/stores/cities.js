import alt from '../alt';
import CitiesActions from '../actions/cities';

class CitiesStore {
  constructor() {
    this.cities = [];

    this.bindListeners({
      handleUpdateCities: CitiesActions.UPDATE_CITIES,
    });
  }

  handleUpdateCities(cities) {
    this.cities = cities;
  }
}

export default alt.createStore(CitiesStore);
