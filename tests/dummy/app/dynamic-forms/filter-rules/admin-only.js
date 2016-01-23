import Ember from 'ember';

export default Ember.Object.extend({
  filter(key, schemaObj) {
    const fieldOption = schemaObj.options.fields[key];
    //could disable based on whether the user has admin role (user info loaded via service)
    fieldOption.disabled = true;
  }
});
