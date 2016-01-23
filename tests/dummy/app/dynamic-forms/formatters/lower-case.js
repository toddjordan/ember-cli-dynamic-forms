import Ember from 'ember';

export default Ember.Object.extend({
  format() {
    this.setValue(this.getValue() + "a");
  }
});

