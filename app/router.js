import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('squares', function() {
    this.route('new');
  });

  this.route('square', {path: '/square/:id'}, function(){
    this.route('edit');
  });
});

export default Router;
