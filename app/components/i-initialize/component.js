import Ember from 'ember';
const { $ } = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    $('.button-collapse').sideNav();
  }
});
