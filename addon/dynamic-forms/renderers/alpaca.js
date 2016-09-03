import Ember from 'ember';

export default Ember.Object.extend({

  initLayout(/*component*/) {
    // no template for alpaca
  },

  render(schema, component) {
    let element = component.$();
    element.empty();
    element.alpaca(schema);
  }
});
