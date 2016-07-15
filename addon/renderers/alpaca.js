import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, element) {
    element.empty();
    element.alpaca(schema);
  }
})
