import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

const basicObject = {
  "schema": {
    "title": "What do you think of Alpaca?",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      },
      "ranking": {
        "type": "string",
        "title": "Ranking",
        "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
      }
    }
  },
  "options": {
    "fields": {
      "name": {
        "filterrules": ["admin-only"]
      }
    }
  }
};

const filterRule = Ember.Object.extend({
  filter(key, schemaObj) {
    const fieldOption = schemaObj.options.fields[key];
    fieldOption.disabled = true;
  }
});


moduleForComponent('dynamic-form', 'dynamic-form:filter rules', {
  integration: true,
  beforeEach() {
    this.register('admin-only:forms.filterrules', filterRule);
  }
});

test('should disable a field based a users role', function (assert) {
  const done = assert.async();
  basicObject['postRender'] = () => {
    assert.ok(this.$('.alpaca-field-text input').prop('disabled'), 'field is disabled');
    done();
  };
  this.set('basicObject', basicObject);
  this.render(hbs`{{dynamic-form schema=basicObject}}`);
});
