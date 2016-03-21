import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const TYPE_MAP = {
  validator: {
    namespace:    'dynamic-forms.validations',
    functionName: 'validate'
  },
  change: {
    namespace:    'dynamic-forms.formatters',
    functionName: 'format'
  }
};

const DynamicForm = Ember.Component.extend({

  renderSchema: Ember.K,

  didInsertElement() {
    this._super(...arguments);
    let container = getOwner(this);
    let renderer;
    let config = container.resolveRegistration('config:environment');
    if (config.dynamicForms && config.dynamicForms.renderer) {
      renderer = container.lookup(`${config.dynamicForms.renderer}:renderers`);
    } else {
      renderer = container.lookup('alpaca:renderers');
    }
    renderer.render(this.get('renderSchema'), this.$());
  },

  didReceiveAttrs() {
    this._super(...arguments);
    let schemaObj = this._initSchema(this.get('schema'));
    let schemaWithData = this._processData(schemaObj);
    let schemaWithPostRender = this._buildPostRender(schemaWithData);
    let schemaWithActions = this._addActions(schemaWithPostRender);
    let filteredSchema = this._processFilters(schemaWithActions);
    let mappedSchema = this._replaceKeywordsWithFunctions(filteredSchema);
    this.set('renderSchema', mappedSchema);
  },

  _buildPostRender(schemaObj) {
    let postRenderFns = [];
    if (this.get('changeAction')) {
      let fields = Object.keys(schemaObj.schema.properties);
      const changeAction = this.get('changeAction');
      let changeFn = function (control) {
        fields.forEach((field) => {
          control.childrenByPropertyId[field].on('keyup', function (e) {
            changeAction(e, field);
          });
          control.childrenByPropertyId[field].on('click', function (e) {
            changeAction(e, field);
          });
        });
      };
      postRenderFns.push(changeFn);
    }
    if (this.get('postRender')) {
      postRenderFns.push(this.get('postRender'));
    }

    if (postRenderFns.length > 0) {
      if (schemaObj.postRender) {
        postRenderFns.push(schemaObj.postRender);
      }
      schemaObj.postRender = function () {
        const args = arguments;
        postRenderFns.forEach((fn) => fn(args[0]));
      };
    }
    return schemaObj;
  },

  _addActions(schemaObj) {
    return _.reduce(this.get('formActions'), (result, value, key) => {
      if ((((((result || {}).options || {}).form || {}).buttons || {})[key])) {
        result.options.form.buttons[key].click = value;
      }
      return result;
    }, schemaObj);
  },

  _processFilters(schemaObj) {
    if (!(schemaObj && schemaObj.options && schemaObj.options.fields)) {
      return schemaObj;
    }
    const optionFields = schemaObj.options.fields;
    const newSchema = _.reduce(optionFields, (result, val, key) => {
      if(val['filter-rules']) {
        val['filter-rules'].forEach((element) => {
          const filterRule = getOwner(this).lookup(`${element}:dynamic-forms.filter-rules`);
          filterRule.filter(key, result);
        });
      }
      return result;
    }, _.clone(schemaObj, true));
    return newSchema;
  },

  _processData(schemaObj) {
    if (this.get('data') && Ember.typeOf(this.get('data')) === 'object') {
      schemaObj.data = this.get('data');
    } else if (this.get('data') && Ember.typeOf(this.get('data')) === 'instance') {
      let keys = Object.keys(schemaObj.schema.properties);
      let dataObj = _.reduce(keys, (data, key) => {
        data[key] = this.get('data').get(key);
        return data;
      }, {});
      schemaObj.data = dataObj;
    }
    return schemaObj;
  },

  _initSchema(schema) {
    let schemaObj;
    if (typeof schema === 'string') {
      schemaObj = JSON.parse(schema);
    } else {
      schemaObj = _.clone(schema, true);
    }

    return schemaObj;
  },

  _replaceKeywordsWithFunctions(schemaObj) {
    const container = getOwner(this);
    const replaceWithFunction = function (object, value, key) {
      if (TYPE_MAP.hasOwnProperty(key) && typeof value === 'string') {
        const type = TYPE_MAP[key];
        const typeObj = container.lookup(`${value}:${type.namespace}`);
        if (typeObj) {
          object[key] = typeObj[type.functionName];
        } // else fail with a message that the given type couldn't be found
      } else if (typeof value === 'object') {
        object[key] = _.transform(value, replaceWithFunction);
      } else {
        object[key] = value;
      }
    };
    return  _.transform(schemaObj, replaceWithFunction);
  }
});

export default DynamicForm;
