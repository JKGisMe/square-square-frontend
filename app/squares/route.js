import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('square').then(
      (squares) => {
        console.info('squares', squares);
        return squares.filterBy('isNew', false);
      }
    );
  }
});
