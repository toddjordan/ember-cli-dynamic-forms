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
  }
};

moduleForComponent('/dynamic-form', 'Integration | Component | dynamic form', {
  integration: true
});

test('should render form from valid schema object', function (assert) {
  return new Ember.RSVP.Promise((resolve) => {
    basicObject["postRender"] = () => {
      assert.ok(this.$('.alpaca-field-text input').length, 'input field exists');
      assert.ok(this.$('.alpaca-field-radio').length, 'radio group exists');
      resolve();
    };
    this.set('basicObject', basicObject);
    this.render(hbs`{{dynamic-form schema=basicObject}}`);
  });
});

test('should render form from valid schema string', function (assert) {
  return new Ember.RSVP.Promise((resolve) => {
    const postRenderFn = () => {
      assert.ok(this.$('.alpaca-field-text input').length, 'input field exists');
      assert.ok(this.$('.alpaca-field-radio').length, 'radio group exists');
      resolve();
    };
    const basicString = JSON.stringify(basicObject);
    this.set('postRenderFn', postRenderFn);
    this.set('basicString', basicString);
    this.render(hbs`{{dynamic-form schema=basicString postRender=postRenderFn}}`);
  });
});
