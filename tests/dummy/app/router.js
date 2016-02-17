import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demos', function() {
    this.route('validation');
    this.route('formatting');
    this.route('filter-rules');
    this.route('basic-usage');
    this.route('data');
    this.route('actions');
    this.route('change-action');
  });

  this.route('demo', function() {});
});

export default Router;
