import DS from 'ember-data';
const { computed } = Ember;

export default DS.Model.extend({
  dimension: DS.attr('number'),
  tiles: DS.attr('string'),

  tileArray: computed('tiles', function() {
    let tiles = this.get('tiles');
    if (tiles) {
      let arr = tiles;
      return arr.split('');
    }
  })
});
