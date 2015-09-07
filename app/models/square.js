import DS from 'ember-data';

export default DS.Model.extend({
  dimension: DS.attr('number'),
  tiles: DS.attr('string')
});
