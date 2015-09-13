import Ember from 'ember';
const { $ } = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    $('.button-collapse').sideNav();
    let fromTop = $('.first-li').offset().top + ($('.first-li').height() / 2);
    $('.add-square').pushpin({ offset: fromTop });
  }
});
