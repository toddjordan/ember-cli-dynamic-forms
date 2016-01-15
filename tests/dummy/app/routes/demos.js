import Ember from 'ember';

const basicObject = {
  "schema": {
    "title":"User Feedback",
    "description":"What do you think about Alpaca?",
    "type":"object",
    "properties": {
      "name": {
        "type":"string",
        "title":"Name"
      },
      "feedback": {
        "type":"string",
        "title":"Feedback"
      },
      "ranking": {
        "type":"string",
        "title":"Ranking",
        "enum":['excellent','ok','so so']
      }
    }
  },
  "options": {
    "focus":false,
    "helper": "Tell us what you think about Alpaca!",
    "fields": {
      "name": {
        "size": 20,
        "helper": "Please enter your name.",
        "placeholder": "Enter your name"
      },
      "feedback" : {
        "type": "textarea",
        "rows": 5,
        "cols": 40,
        "helper": "Please enter your feedback."
      },
      "ranking": {
        "type": "select",
        "helper": "Select your ranking.",
        "optionLabels": ["Awesome!", "It's Ok", "Hmm..."]
      }
    }
  }
};

export default Ember.Route.extend({
  model() {
    return basicObject;
  }

});
