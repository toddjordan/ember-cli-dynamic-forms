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

const basicString = JSON.stringify(basicObject);

moduleForComponent('/dynamic-form', 'Integration | Component | dynamic form', {
  integration: true
});

test('should render form from valid schema object', function (assert) {
  this.set('basicObject', basicObject);
  this.render(hbs`{{dynamic-form schema=basicObject}}`);
  assert.ok(this.$('.alpaca-field-text input').length);
  assert.equal(this.$('.alpaca-field-radio radio').length, 4);
});

test('should render form from valid schema string', function (assert) {
  this.set('basicObject', basicString);
  this.render(hbs`{{dynamic-form schema=basicString}}`);
  assert.ok(this.$('.alpaca-field-text input').length);
  assert.equal(this.$('.alpaca-field-radio > radio').length, 4);
});
