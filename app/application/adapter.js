import DS from 'ember-data';
import ENV from '../config/environment';
import Ember from 'ember';
const { computed } = Ember;

export default DS.JSONAPIAdapter.extend({
  host: computed(function() {
    if (ENV.environment === 'development') {
      return 'http://localhost:4000';
    } else if (ENV.environment === 'production' || ENV.environment === 'staging') {
      return 'https://square-square-backend.herokuapp.com';
    }
  })

});
