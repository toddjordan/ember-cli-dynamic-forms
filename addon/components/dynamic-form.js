import Ember from 'ember';

const DynamicForm = Ember.Component.extend({

  renderSchema: Ember.K,

  didInsertElement() {
    this.$().alpaca(this.get('renderSchema'));
  },

  didReceiveAttrs() {
    const schema = this.attrs.schema.value;
    let schemaObj;
    if (typeof schema === 'string') {
      schemaObj = JSON.parse(schema);
      if (this.attrs.postRender) {
        const postRenderFn = this.attrs.postRender.value;
        schemaObj["postRender"] = postRenderFn;
      }
    } else {
      schemaObj = schema;
    }
    this.set('renderSchema', schemaObj);
  }
});

export default DynamicForm;
