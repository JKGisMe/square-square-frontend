import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  square: computed.alias('model')
});