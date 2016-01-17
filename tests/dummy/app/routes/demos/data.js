import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const basicModel = this.modelFor('demos');
    const data = Ember.Object.create({
      name: 'Todd Jordan',
      feedback: 'Ember + Alpaca = Awesome',
      ranking: 'excellent'
    });
    return Ember.Object.create({
      basicModel,
      data
    });
  }

});
