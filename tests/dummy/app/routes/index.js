import Ember from 'ember';

const basicObject = {
  "schema": {
    "title": "What do you think of Alpaca?",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      },
      "ranking": {
        "type": "string",
        "title": "Ranking",
        "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
      }
    }
  }
};

const basicString = JSON.stringify(basicObject);

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      basicObject,
      basicString
    });
  }

});
