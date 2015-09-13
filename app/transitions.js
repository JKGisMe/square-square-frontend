import Ember from 'ember';

export default function() {

  this.transition(
    this.fromRoute('squares.index'),
    this.toRoute('squares.new'),
    this.use('toUp'),
    this.reverse('toDown'),
    this.debug()
  );
}