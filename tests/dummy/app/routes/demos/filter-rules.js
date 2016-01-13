/* globals _ */

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

    return Ember.Object.create({ basicFilterRule });
  }
});
