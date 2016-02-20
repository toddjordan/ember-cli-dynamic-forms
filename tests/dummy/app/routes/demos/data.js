import Ember from 'ember';

const Feedback = Ember.Object.extend({
  name: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
export default Ember.Route.extend({
  model() {
    const basicModel = this.modelFor('demos');
    const data = Feedback.create({
      firstName: 'Todd',
      lastName: 'Jordan',
      feedback: 'Ember + Alpaca = Awesome',
      ranking: 'excellent'
    });
    return Ember.Object.create({
      basicModel,
      data
    });
  }

});
