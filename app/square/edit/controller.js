import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  square: computed.alias('model'),

  actions: {
    save(square) {
      square.save().then(() => {
        this.transitionToRoute('squares');
      }, (errors) => {
        console.log('errors', errors);
      });
    }
  }
});