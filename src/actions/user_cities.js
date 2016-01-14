import alt from '../alt';
import UserCityCollection from '../collections/user_cities';

class UserCitiesActions {
  constructor() {
    this.generateActions('updateCities');
  }

  fetchCities() {
    let cities = new UserCityCollection();
    this.actions.updateCities(cities.localStorage.findAll());
  }
}

export default alt.createActions(UserCitiesActions);
