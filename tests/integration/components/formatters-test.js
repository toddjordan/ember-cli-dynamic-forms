import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

const formatter = Ember.Object.extend({
  format() {
    this.setValue("ALPACA!");
  }
});

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
        "events": {
          "change": "drinking-age"
        }
      }
    }
  }
};

moduleForComponent('dynamic-form', 'dynamic-form:validations', {
  integration: true,
  beforeEach() {
    this.register('drinking-age:forms.formatters', formatter);
  }
});

test('applies a custom formatter when the user tabs away from the drinking age field', function (assert) {
  const done = assert.async();
  basicObject["postRender"] = () => {
    this.$('.alpaca-field-text input').val('matters not').change();
    assert.equal(this.$('.alpaca-field-text input').val(), "ALPACA!");
    done();
  };

  this.set('basicObject', basicObject);
  this.render(hbs`{{dynamic-form schema=basicObject}}`);
});
