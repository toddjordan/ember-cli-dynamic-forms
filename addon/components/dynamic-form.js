import Ember from 'ember';

const TYPE_MAP = {
  validator: {
    namespace: 'forms.validations',
    functionName: 'validate'
  }
};

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
    } else {
      schemaObj = schema;
    }
    if (this.attrs.postRender) {
      const postRenderFn = this.attrs.postRender.value;
      schemaObj["postRender"] = postRenderFn;
    }
    const myfun = (object, value, key) => {
      if (TYPE_MAP.hasOwnProperty(key) && typeof value === 'string') {
        const type = TYPE_MAP[key];
        const typeObj = this.container.lookup(`${value}:${type.namespace}`);
        if (typeObj) {
          object[key] = typeObj[type.functionName];
        } // else fail with a message that the given type couldn't be found
      } else if (typeof value === 'object') {
        object[key] = _.transform(value, myfun);
      } else {
        object[key] = value;
      }
    };
    const mappedSchema = _.transform(schemaObj, myfun);
    this.set('renderSchema', mappedSchema);
  }
});

export default DynamicForm;
