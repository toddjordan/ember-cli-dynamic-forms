import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateOnChange(event) {
      Ember.Logger.debug('changed', event);
      const propertyName = event.target.name;
      const value = event.target.value;
      Ember.Logger.debug('sending updateModel actions with ', propertyName, value);
      this.send('updateModel', propertyName, value);
    }
  }
});
