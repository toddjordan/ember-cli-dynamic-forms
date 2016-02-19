//import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

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

const EmberData = Ember.Object.extend({
  name: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })

});

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

test('should work with an ember object as data', function (assert) {
  const fixtureSchema = _.clone(schemaObject, true);
  const done = assert.async();
  fixtureSchema.postRender = () => {
    assert.equal(this.$('.alpaca-field-text input').val(), 'Todd Jordan');
    fixtureSchema.postRender = () => {
      assert.equal(this.$('.alpaca-field-text input').val(), 'Jeremy Rowe');
      done();
    };
    this.get('dataObject').set('firstName', 'Jeremy');
    this.get('dataObject').set('lastName', 'Rowe');
    this.render(hbs`{{dynamic-form schema=schemaObject data=dataObject}}`);
  };
  this.set('schemaObject', fixtureSchema);
  this.set('dataObject', EmberData.create({
    firstName: 'Todd',
    lastName: 'Jordan',
    ranking: 'excellent'
  }));
  this.render(hbs`{{dynamic-form schema=schemaObject data=dataObject}}`);
});
