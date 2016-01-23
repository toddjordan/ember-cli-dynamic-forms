import Ember from 'ember';

export default Ember.Object.extend({

  validate(callback) {
    var value = this.getValue();
    var age = this.getParent().childrenByPropertyId["age"].getValue();
    if ((value === "beer" || value === "wine") && age < 21) {
      callback({
        "status": false,
        "message": "You are too young to drink alcohol!"
      });
      return;
    }
  }
});
