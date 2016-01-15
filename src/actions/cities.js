import alt from '../alt';
import CityCollection from '../collections/cities';

class CitiesActions {
  constructor() {
    this.generateActions('updateCities');
  }

  fetchCities(searchStr) {
    if (!searchStr) return;

    let cities = new CityCollection();
    currentWeather.searchStr = searchStr;

    let xhrs = cities.fetch();
    var dfd = Q.all([xhrs]);

    dfd.done(() => {
      this.actions.updateCities(cities.toJSON());
    });
  }
}

export default alt.createActions(CitiesActions);
