import Ember from 'ember';

export default Ember.Object.extend({
  format() {
    const originalValue = this.getValue();
    const newValue = originalValue.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    this.setValue(newValue);
  }
});
