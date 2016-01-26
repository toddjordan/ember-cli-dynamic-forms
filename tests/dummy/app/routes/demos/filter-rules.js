import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const basicUsageModel = this.modelFor('demos');
    const basicFilterRule = _.clone(basicUsageModel, true);
    basicFilterRule["options"] = {
      "fields": {
        "name": {
          "filter-rules": [ "admin-only" ]
        }
      }
    };
    const data = Ember.Object.create({
      name: "Todd Jordan"
    });
    return Ember.Object.create({ basicFilterRule, data });
  }
});
