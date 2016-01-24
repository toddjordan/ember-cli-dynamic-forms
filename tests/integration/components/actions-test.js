import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('/dynamic-form', 'Integration | Component | dynamic-form:actions', {
    integration: true
});

const schemaObject = {
    "schema": {
        "title": "Your Information",
        "type": "object",
        "properties": {
            "firstName": {
                "title": "First Name",
                "type": "string"
            },
            "lastName": {
                "title": "Last Name",
                "type": "string"
            },
            "age": {
                "title": "Age",
                "type": "integer",
                "minimum": 0,
                "maximum": 100
            },
            "preferences": {
                "title": "Preferences",
                "type": "string",
                "enum": ["Non-Smoking", "Vegetarian", "Wheelchair Accessible", "Child Friendly"]
            }
        }
    },
    "options": {
        "fields": {
            "preferences": {
                "type": "checkbox"
            }
        },
        "form": {
            "buttons": {
                "submit": {

                }
            }
        }
    }
};

test('should invoke provided action when button clicked', function (assert) {
  const testSchemaObject = _.clone(schemaObject, true);
  testSchemaObject.postRender = () => {
    this.$('.alpaca-form-buttons-container button').click();
  };
  this.set('schemaObject', testSchemaObject);
  const done = assert.async();
  const submitAction = {
    submit: function () {
      assert.ok(true);
      done();
    }
  };
  this.set('actions', submitAction);
  this.render(hbs`{{dynamic-form schema=schemaObject formActions=actions }}`);
});
