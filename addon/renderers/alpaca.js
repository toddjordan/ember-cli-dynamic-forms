import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, element) {
    element.alpaca(schema);
  }
});
