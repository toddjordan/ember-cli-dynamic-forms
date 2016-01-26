import Ember from 'ember';

export default Ember.Object.extend({
    validate(callback) {
        // get the value of the field this validation is attached to:
        // this.getValue();

        // get the value of other fields in the form:
        // this.getParent().childrenByPropertyId['otherid'].getValue();

        // when validated, call the callback with information on the result to display
        // callback({
        //   "status": false,
        //   "message": "failed cause blah blah"
        // });
    }
});
