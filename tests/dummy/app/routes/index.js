import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.transitionTo('demos.basic-usage');
  }


});
