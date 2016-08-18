import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var baseSchema = this.modelFor('demos');
    return Ember.copy(baseSchema, true);
  }
});
