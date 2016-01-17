import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    this.$('pre code').each((index, element) => hljs.highlightBlock(element));
  }
});
