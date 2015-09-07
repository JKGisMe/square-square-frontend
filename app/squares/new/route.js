import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('square');
  },
  actions: {
    save() {
      const post = this.currentModel;
      post.save().then(() => {
        this.transitionTo('squares');
      }, (errors) => {
        console.log('errors', errors);
      });
    }
  }
});