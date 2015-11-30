import Ember from 'ember';

const DynamicForm = Ember.Component.extend({

  renderSchema: Ember.K,

  didInsertElement() {
    this.$().alpaca(this.get('renderSchema'));
  },

  didReceiveAttrs() {
    const schema = this.attrs.schema.value;
    if (typeof schema === 'string') {
      this.set('renderSchema', JSON.parse(schema));
    } else {
      this.set('renderSchema', schema);
    }
  }

});

export default DynamicForm;
