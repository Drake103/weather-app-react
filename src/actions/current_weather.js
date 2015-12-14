import alt from '../alt';
import CurrentWeatherCollection from '../collections/current_weather';
import Q from 'q';
import _ from 'lodash';

class CurrentWeatherActions {
  constructor() {
    this.generateActions('updateCurrentWeather');
  }

  fetchCurrentWeather(citiesIds) {
    let currentWeather = new CurrentWeatherCollection();
    currentWeather.citiesIds = citiesIds;

    let xhrs = currentWeather.fetch();
    var dfd = Q.all([xhrs]);

    dfd.done(() => {
      let result = _.reduce(currentWeather.toJSON(), function(m, val) {
        m[val.id] = val; return m;
      }, {});

      this.actions.updateCurrentWeather(result);
    });
  }
}

export default alt.createActions(CurrentWeatherActions);
