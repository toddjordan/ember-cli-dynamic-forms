import Ember from 'ember';

const basicFormatting = {
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "number",
        "minimum": 0
      },
      "beverage": {
        "type": "string",
        "enum": ["water", "soda", "beer", "wine"]
      }
    }
  },
  "options": {
    "focus":false,
    "fields": {
      "name": {
        "label": "Name",
        "events": {
          "change": "proper-name"
        }
      },
      "age": {
        "label": "Age",
        "type": "integer",
        "slider": true
      },
      "beverage": {
        "label": "Choice of Beverage",
        "slider": true,
        "validator": "drinking-age"
      }
    }
  }
};

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({ basicFormatting });
  }
});
