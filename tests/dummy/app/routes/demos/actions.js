import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const formActionSchema = {
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
          }
        }
      },
      "options": {
        "focus":false,
        "form": {
          "attributes": {
            "action": "http://httpbin.org/post",
            "method": "post"
          },
          "buttons": {
            "noop": {
              "type": "button",
              "value": "Do Nothing",
              "styles": "btn btn-primary"
            },
            "validate": {
              "title": "Validate and view JSON!"
            },
            "submit": {
              "id": "mySubmit",
              "attributes": {
                "data-test": "123"
              }
            }
          }
        }
      }
    };
    const formActions = {
      noop: function () {
        alert("Ain't gonna do it");
      },
      submit: function () {
        this.ajaxSubmit().always(function() {
          alert("Form submitted!");
        });
      },
      validate: function () {
        this.refreshValidationState(true);
        if (this.isValid(true)) {
          var value = this.getValue();
          alert(JSON.stringify(value, null, "  "));
        }
      }
    };
    return { formActionSchema, formActions };
  }
});
