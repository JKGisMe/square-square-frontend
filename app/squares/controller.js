import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  squares: computed.alias('model'),

  actions: {
    delete(square) {
      this.store.findRecord('square', square.id).then(function(square) {
        square.destroyRecord(); // => DELETE to /posts/2
      });
    }
  }
});