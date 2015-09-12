import DS from 'ember-data';
const { computed } = Ember;

export default DS.Model.extend({
  dimension: DS.attr('number'),
  tiles: DS.attr('string'),
  tileArray: computed('tiles', function() {
      let arr = this.get('tiles');
      return arr.split('');
  })
});
