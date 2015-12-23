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

const validationObject = {
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "number",
        "minimum": 0
      },
      "beverage": {
        "type": "string",
        "enum": ["water", "sode", "beer", "wine"]
      }
    }
  },
  "options": {
    "fields": {
      "name": {
        "label": "Name"
      },
      "age": {
        "label": "Age",
        "type": "integer",
        "slider": true
      },
      "beverage": {
        "label": "Choice of Beverage",
        "slider": true,
        "validator": "drinking-age"
      }
    }
  }
};

const validator = Ember.Object.extend({
  validate(callback) {
    var value = this.getValue();
    var age = this.getParent().childrenByPropertyId["age"].getValue();
    if ((value === "beer" || value === "wine") && age < 21) {
      callback({
        "status": false,
        "message": "You are too young to drink alcohol!"
      });
      return;
    }
  }
});

moduleForComponent('/dynamic-form', 'Integration | Component | dynamic form', {
  integration: true,
  beforeEach() {
    this.register('drinking-age:forms.validations', validator);
  }
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

test('should replace validator string with corresponding function', function (assert) {
  return new Ember.RSVP.Promise((resolve) => {
    const postRenderFn = () => {
      this.$('input[name="name"]').val('Todd');
      this.$('input[name="age"]').val('15');
      this.$('select').change(() => {
        Ember.run.later(() => {
          resolve();
        }, 1000);
      });
      this.$('select').val('beer').change();
    };
    this.set('postRenderFn', postRenderFn);
    this.set('validationObject', validationObject);
    this.render(hbs`{{dynamic-form schema=validationObject postRender=postRenderFn}}`);
  }).then(() => {
    assert.equal(this.$('.alpaca-message').text().trim(), 'You are too young to drink alcohol!');
  });
});

