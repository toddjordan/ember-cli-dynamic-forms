import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';
import _ from 'lodash';
const { set, get } = Ember;

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
  formRenderer: null,

  init() {
    this._super(...arguments);
    let container = getOwner(this);
    let config = container.resolveRegistration('config:environment');
    if (config.dynamicForms && config.dynamicForms.renderer) {
      set(this, 'formRenderer', container.lookup(`${config.dynamicForms.renderer}:dynamic-forms.renderers`));
    } else {
      //default to alpaca
      set(this, 'formRenderer', container.lookup('alpaca:dynamic-forms.renderers'));
    }
    get(this, 'formRenderer').initLayout(this);
  },

  _render() {
    Ember.Logger.debug('_render');
    let renderer = get(this, 'formRenderer');
    renderer.render(get(this, 'renderSchema'), this);
  },

  didInsertElement() {
    this._super(...arguments);
    this._render();
  },

  didReceiveAttrs() {
    this._super(...arguments);
    Ember.Logger.debug('didReceiveAttrs');
    let buildSchema = _.flow([
      this._initSchema,
      _.curry(this._processData)(get(this, 'data')),
      _.curry(this._buildPostRender)(get(this, 'changeAction'), get(this, 'postRender')),
      _.curry(this._addActions)(get(this, 'formActions')),
      _.curry(this._processFilters)(getOwner(this)),
      _.curry(this._replaceKeywordsWithFunctions)(getOwner(this))
    ]);
    set(this, 'renderSchema', buildSchema(get(this, 'schema')));
  },

  willUpdate() {
    this._super(...arguments);
    Ember.Logger.debug('willUpdate');
    this._render();
  },

  _initSchema(schema) {
    Ember.Logger.debug('_initSchema', schema);
    if (typeof schema === 'string') {
      return JSON.parse(schema);
    }
    return _.clone(schema, true);
  },

  _processData(formData, schemaObj) {
    Ember.Logger.debug('_processData', schemaObj, formData);
    if (formData && Ember.typeOf(formData) === 'object') {
      schemaObj.data = formData;
    } else if (formData && Ember.typeOf(formData) === 'instance') {
      let keys = Object.keys(schemaObj.schema.properties);
      let dataObj = _.reduce(keys, (data, key) => {
        data[key] = get(formData, key);
        return data;
      }, {});
      schemaObj.data = dataObj;
    }
    return schemaObj;
  },

  _buildPostRender(changeAction, postRender, schemaObj) {
    Ember.Logger.debug('_buildPostRender', schemaObj);
    let postRenderFns = [];
    if (changeAction) {
      let fields = Object.keys(schemaObj.schema.properties);
      let changeFn = function (control) {
        fields.forEach((field) => {
          control.childrenByPropertyId[field].on('change', function (e) {
            changeAction(e, field);
          });
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
    if (postRender) {
      postRenderFns.push(postRender);
    }

    if (postRenderFns.length > 0) {
      if (schemaObj.postRender) {
        postRenderFns.push(schemaObj.postRender);
      }
      schemaObj.postRender = function () {
        let args = arguments;
        postRenderFns.forEach((fn) => fn(args[0]));
      };
    }
    return schemaObj;
  },

  _addActions(formActions, schemaObj) {
    Ember.Logger.debug('_addActions', schemaObj);
    return _.reduce(formActions, (result, value, key) => {
      if ((((((result || {}).options || {}).form || {}).buttons || {})[key])) {
        result.options.form.buttons[key].click = value;
      }
      return result;
    }, schemaObj);
  },

  _processFilters(owner, schemaObj) {
    Ember.Logger.debug('_processData', schemaObj);
    if (!(schemaObj && schemaObj.options && schemaObj.options.fields)) {
      return schemaObj;
    }
    let optionFields = schemaObj.options.fields;
    let newSchema = _.reduce(optionFields, (result, val, key) => {
      if(val['filter-rules']) {
        val['filter-rules'].forEach((element) => {
          let filterRule = owner.lookup(`${element}:dynamic-forms.filter-rules`);
          filterRule.filter(key, result);
        });
      }
      return result;
    }, _.clone(schemaObj, true));
    return newSchema;
  },

  _replaceKeywordsWithFunctions(owner, schemaObj) {
    Ember.Logger.debug('_replaceKeywordsWithFunctions', schemaObj);
    let replaceWithFunction = function (object, value, key) {
      if (TYPE_MAP.hasOwnProperty(key) && typeof value === 'string') {
        let type = TYPE_MAP[key];
        let typeObj = owner.lookup(`${value}:${type.namespace}`);
        if (typeObj) {
          object[key] = typeObj[type.functionName];
        } // else fail with a message that the given type couldn't be found
      } else if (value === null) {
        object[key] = '';
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
