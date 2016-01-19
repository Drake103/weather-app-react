import alt from '../alt';
import UserCityCollection from '../collections/user_cities';
import Q from 'q';

class UserCitiesActions {
  constructor() {
    this.generateActions('updateCities');
  }

  fetchCities() {
    let cities = new UserCityCollection();
    this.actions.updateCities(cities.localStorage.findAll());
  }

  addCity(city) {
    let cities = new UserCityCollection();

    let xhrs = cities.create(city);
    var dfd = Q.all([xhrs]);

    dfd.done(() => {
      this.actions.updateCities(cities.localStorage.findAll());
    });
  }
}

export default alt.createActions(UserCitiesActions);
