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
  });
});

export default Router;
