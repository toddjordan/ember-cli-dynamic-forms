//import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

const schemaObject = {
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

const dataObject = {
  "name": "Todd Jordan",
  "ranking": "not too shabby"
};

moduleForComponent('/dynamic-form' , 'Integration | Component | dynamic-form:data-binding', {
  integration: true
});

test('should update input value when model updated', function (assert) {
  const fixtureSchema = _.clone(schemaObject, true);
  const done = assert.async();
  fixtureSchema.postRender = () => {
    assert.equal(this.$('.alpaca-field-text input').val(), 'Todd Jordan');
    dataObject.name = 'Jeremy Rowe';
    fixtureSchema.postRender = () => {
      assert.equal(this.$('.alpaca-field-text input').val(), 'Jeremy Rowe');
      done();
    };
    this.render(hbs`{{dynamic-form schema=schemaObject data=dataObject}}`);
  };
  this.set('schemaObject', fixtureSchema);
  this.set('dataObject', dataObject);
  this.render(hbs`{{dynamic-form schema=schemaObject data=dataObject}}`);
});
