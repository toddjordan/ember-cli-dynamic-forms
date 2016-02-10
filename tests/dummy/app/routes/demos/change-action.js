import Ember from 'ember';

export default Ember.Route.extend({
  data:  Ember.Object.create({
      name: 'Todd Jordan',
      feedback: 'Ember + Alpaca = Awesome',
      ranking: 'excellent'
  }),

  actions: {
    updateModel(propertyName, value) {
      Ember.Logger.debug('changed', propertyName, value);
      this.set(`data.${propertyName}`, value);
    }
  },

  model() {
    const schema = {
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
      }
    };

    return {
      schema,
      data: this.get('data')
    };
  }
});
