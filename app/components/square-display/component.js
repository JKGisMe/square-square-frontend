import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['square-display'],

  tileArray: computed.readOnly('square.tileArray'),
  dimension: computed.readOnly('square.dimension'),
  rows: computed('tileArray', 'dimension', function() {
    let dimension = this.get('dimension');
    let tileArray = this.get('tileArray');
    let rowArray = [];
    // let temp = [];
    let i,j;
    for (i = 0, j = tileArray.length; i < j; i += dimension) {
      // temp = tileArray.slice(i, i + dimension);
      rowArray.push(tileArray.slice(i, i + dimension));
    }
    return rowArray;
  })
});
