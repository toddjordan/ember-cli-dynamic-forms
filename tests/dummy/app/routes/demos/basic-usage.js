import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const basicObject = this.modelFor('demos');
    const basicString = JSON.stringify(basicObject);
    return Ember.Object.create({ basicObject, basicString });
  }
});
