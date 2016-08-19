"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/dynamic-form', ['exports', 'ember-cli-dynamic-forms/components/dynamic-form'], function (exports, _emberCliDynamicFormsComponentsDynamicForm) {
  exports['default'] = _emberCliDynamicFormsComponentsDynamicForm['default'];
});
define('dummy/components/highlight-js', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      this._super.apply(this, arguments);
      this.$('pre code').each(function (index, element) {
        return hljs.highlightBlock(element);
      });
    }
  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/demos/change-action', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      updateOnChange: function updateOnChange(event) {
        _ember['default'].Logger.debug('changed', event);
        var propertyName = event.target.name;
        var value = event.target.value;
        _ember['default'].Logger.debug('sending updateModel actions with ', propertyName, value);
        this.send('updateModel', propertyName, value);
      }
    }
  });
});
define('dummy/controllers/demos/schema-updates', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    _schemaTitle: '',
    _feedbackData: '',
    data: {},
    schemaTitle: _ember['default'].computed.alias('model.schema.title'),
    feedbackData: _ember['default'].computed.alias('data.feedback'),
    actions: {
      setTitle: function setTitle() {
        var newTitle = this.get('_schemaTitle');
        if (newTitle) {
          this.set('schemaTitle', newTitle);
          this.set('_schemaTitle', '');
          this.notifyPropertyChange('model');
        }
      },
      setFeedback: function setFeedback() {
        var newFeedback = this.get('_feedbackData');
        if (newFeedback) {
          this.set('feedbackData', newFeedback);
          this.set('_feedbackData', '');
          this.notifyPropertyChange('model');
        }
      }
    }
  });
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/dynamic-forms/filter-rules/admin-only', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    filter: function filter(key, schemaObj) {
      var fieldOption = schemaObj.options.fields[key];
      //could disable based on whether the user has admin role (user info loaded via service)
      fieldOption.disabled = true;
    }
  });
});
define("dummy/dynamic-forms/formatters/lower-case", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Object.extend({
    format: function format() {
      this.setValue(this.getValue() + "a");
    }
  });
});
define('dummy/dynamic-forms/formatters/proper-name', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    format: function format() {
      var originalValue = this.getValue();
      var newValue = originalValue.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      this.setValue(newValue);
    }
  });
});
define("dummy/dynamic-forms/validations/drinking-age", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Object.extend({

    validate: function validate(callback) {
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
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/renderers/alpaca', ['exports', 'ember-cli-dynamic-forms/renderers/alpaca'], function (exports, _emberCliDynamicFormsRenderersAlpaca) {
  exports['default'] = _emberCliDynamicFormsRenderersAlpaca['default'];
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('demos', function () {
      this.route('validation');
      this.route('formatting');
      this.route('filter-rules');
      this.route('basic-usage');
      this.route('data');
      this.route('actions');
      this.route('change-action');
      this.route('schema-updates');
    });

    this.route('demo', function () {});
  });

  exports['default'] = Router;
});
define("dummy/routes/demos", ["exports", "ember"], function (exports, _ember) {

  var basicObject = {
    "schema": {
      "title": "User Feedback",
      "description": "What do you think about Alpaca?",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "feedback": {
          "type": "string",
          "title": "Feedback"
        },
        "ranking": {
          "type": "string",
          "title": "Ranking",
          "enum": ['excellent', 'ok', 'so so']
        }
      }
    },
    "options": {
      "focus": false,
      "helper": "Tell us what you think about Alpaca!",
      "fields": {
        "name": {
          "size": 20,
          "helper": "Please enter your name.",
          "placeholder": "Enter your name"
        },
        "feedback": {
          "type": "textarea",
          "rows": 5,
          "cols": 40,
          "helper": "Please enter your feedback."
        },
        "ranking": {
          "type": "select",
          "helper": "Select your ranking.",
          "optionLabels": ["Awesome!", "It's Ok", "Hmm..."]
        }
      }
    }
  };

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return basicObject;
    }

  });
});
define("dummy/routes/demos/actions", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      var formActionSchema = {
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
          "focus": false,
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
      var formActions = {
        noop: function noop() {
          window.alert("Ain't gonna do it");
        },
        submit: function submit() {
          this.ajaxSubmit().always(function () {
            window.alert("Form submitted!");
          });
        },
        validate: function validate() {
          this.refreshValidationState(true);
          if (this.isValid(true)) {
            var value = this.getValue();
            window.alert(JSON.stringify(value, null, "  "));
          }
        }
      };
      return { formActionSchema: formActionSchema, formActions: formActions };
    }
  });
});
define('dummy/routes/demos/basic-usage', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var basicObject = this.modelFor('demos');
      var basicString = JSON.stringify(basicObject);
      return _ember['default'].Object.create({ basicObject: basicObject, basicString: basicString });
    }
  });
});
define('dummy/routes/demos/change-action', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    data: _ember['default'].Object.create({
      name: 'Todd Jordan',
      feedback: 'Ember + Alpaca = Awesome',
      ranking: 'excellent'
    }),

    actions: {
      updateModel: function updateModel(propertyName, value) {
        _ember['default'].Logger.debug('changed', propertyName, value);
        this.set('data.' + propertyName, value);
      }
    },

    model: function model() {
      var schema = {
        "schema": {
          "title": "User Feedback",
          "description": "What do you think about Alpaca?",
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "title": "Name"
            },
            "feedback": {
              "type": "string",
              "title": "Feedback"
            },
            "ranking": {
              "type": "string",
              "title": "Ranking",
              "enum": ['excellent', 'ok', 'so so']
            }
          }
        }
      };

      return {
        schema: schema,
        data: this.get('data')
      };
    }
  });
});
define('dummy/routes/demos/data', ['exports', 'ember'], function (exports, _ember) {

  var Feedback = _ember['default'].Object.extend({
    name: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    })
  });
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var basicModel = this.modelFor('demos');
      var data = Feedback.create({
        firstName: 'Todd',
        lastName: 'Jordan',
        feedback: 'Ember + Alpaca = Awesome',
        ranking: 'excellent'
      });
      return _ember['default'].Object.create({
        basicModel: basicModel,
        data: data
      });
    }

  });
});
define('dummy/routes/demos/filter-rules', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      var basicUsageModel = this.modelFor('demos');
      var basicFilterRule = _.clone(basicUsageModel, true);
      basicFilterRule["options"] = {
        "fields": {
          "name": {
            "filter-rules": ["admin-only"]
          }
        }
      };
      var data = _ember['default'].Object.create({
        name: "Todd Jordan"
      });
      return _ember['default'].Object.create({ basicFilterRule: basicFilterRule, data: data });
    }
  });
});
define("dummy/routes/demos/formatting", ["exports", "ember"], function (exports, _ember) {

  var basicFormatting = {
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
          "enum": ["water", "soda", "beer", "wine"]
        }
      }
    },
    "options": {
      "focus": false,
      "fields": {
        "name": {
          "label": "Name",
          "events": {
            "change": "proper-name"
          }
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

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return _ember["default"].Object.create({ basicFormatting: basicFormatting });
    }
  });
});
define('dummy/routes/demos/schema-updates', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var baseSchema = this.modelFor('demos');
      return _ember['default'].copy(baseSchema, true);
    }
  });
});
define("dummy/routes/demos/validation", ["exports", "ember"], function (exports, _ember) {

  var basicValidation = {
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
          "enum": ["water", "soda", "beer", "wine"]
        }
      }
    },
    "options": {
      "focus": false,
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

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return _ember["default"].Object.create({ basicValidation: basicValidation });
    }
  });
});
define('dummy/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      this.transitionTo('demos.basic-usage');
    }

  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-inverse");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el4, "aria-expanded", "false");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "navbar-brand");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("ember-cli-dynamic-forms");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        dom.setAttribute(el3, "id", "bs-example-navbar-collapse-1");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "active");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "#");
        var el7 = dom.createTextNode("Documentation");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "sr-only");
        var el8 = dom.createTextNode("(current)");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [20, 0], [20, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/highlight-js", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/highlight-js.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/demos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 8,
              "column": 75
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Basic Usage");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 73
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Validation");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 73
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Formatting");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 11,
              "column": 61
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Data");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 77
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Filter Rules");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 74
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Button Actions");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 14,
              "column": 79
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Change Action");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 88
            }
          },
          "moduleName": "dummy/templates/demos.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Schema & Data Updates");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-9");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 5, 5);
        morphs[4] = dom.createMorphAt(element1, 7, 7);
        morphs[5] = dom.createMorphAt(element1, 9, 9);
        morphs[6] = dom.createMorphAt(element1, 11, 11);
        morphs[7] = dom.createMorphAt(element1, 13, 13);
        morphs[8] = dom.createMorphAt(element1, 15, 15);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [4, 6], [4, 16]]]], ["block", "link-to", ["demos.basic-usage"], ["class", "list-group-item"], 0, null, ["loc", [null, [8, 8], [8, 87]]]], ["block", "link-to", ["demos.validation"], ["class", "list-group-item"], 1, null, ["loc", [null, [9, 8], [9, 85]]]], ["block", "link-to", ["demos.formatting"], ["class", "list-group-item"], 2, null, ["loc", [null, [10, 8], [10, 85]]]], ["block", "link-to", ["demos.data"], ["class", "list-group-item"], 3, null, ["loc", [null, [11, 8], [11, 73]]]], ["block", "link-to", ["demos.filter-rules"], ["class", "list-group-item"], 4, null, ["loc", [null, [12, 8], [12, 89]]]], ["block", "link-to", ["demos.actions"], ["class", "list-group-item"], 5, null, ["loc", [null, [13, 8], [13, 86]]]], ["block", "link-to", ["demos.change-action"], ["class", "list-group-item"], 6, null, ["loc", [null, [14, 8], [14, 91]]]], ["block", "link-to", ["demos.schema-updates"], ["class", "list-group-item"], 7, null, ["loc", [null, [15, 8], [15, 100]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
define("dummy/templates/demos/actions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 71,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/actions.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/actions.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nconst schemaObject = {\n    \"schema\": {\n        \"title\": \"Your Information\",\n        \"type\": \"object\",\n        \"properties\": {\n            \"firstName\": {\n                \"title\": \"First Name\",\n                \"type\": \"string\"\n            },\n            \"lastName\": {\n                \"title\": \"Last Name\",\n                \"type\": \"string\"\n            },\n            \"age\": {\n                \"title\": \"Age\",\n                \"type\": \"integer\",\n                \"minimum\": 0,\n                \"maximum\": 100\n            }\n        }\n    },\n    \"options\": {\n        \"focus\":false,\n        \"form\": {\n            \"attributes\": {\n                \"action\": \"http://httpbin.org/post\",\n                \"method\": \"post\"\n            },\n            \"buttons\": {\n                \"noop\": {\n                    \"type\": \"button\",\n                    \"value\": \"Do Nothing\",\n                    \"styles\": \"btn btn-primary\"\n                },\n                \"validate\": {\n                    \"title\": \"Validate and view JSON!\"\n                },\n                \"submit\": {\n                    \"id\": \"mySubmit\",\n                    \"attributes\": {\n                        \"data-test\": \"123\"\n                    }\n                }\n            }\n        }\n    }\n};\n\nexport default Ember.Route.extend({\n  model() {\n    return basicObject;\n  }\n});\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 0
            },
            "end": {
              "line": 100,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/actions.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/actions.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("\nmodel() {\n    const formActions = {\n      noop: function () {\n        alert(\"Ain't gonna do it\");\n      },\n      submit: function () {\n        this.ajaxSubmit().always(function() {\n          alert(\"Form submitted!\");\n        });\n      },\n      validate: function () {\n        this.refreshValidationState(true);\n        if (this.isValid(true)) {\n          var value = this.getValue();\n          alert(JSON.stringify(value, null, \"  \"));\n        }\n      }\n    };\n\n    return { formActionSchema, formActions };\n}\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 102,
              "column": 0
            },
            "end": {
              "line": 104,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/actions.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos.actions.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model.formActionSchema formActions=model.formActions }}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 107,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/actions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Form Actions");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form includes submit buttons, whose handlers are passed into the component apart from the schema.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In cases where you want to specify action buttons in your form schema, `ember-cli-dynamic-forms` provides a way to pass action function to the component to handle them.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In alpacajs, you can provide buttons to be rendered along with your form.  These buttons specifictions take functions to handle what happens when they are clicked.  As an alternative to adding functions directly to you form json schema, with `ember-cli-dynamic-forms` you may also pass in actions functions as a component arguments.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Take the following example with 3 separate buttons:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This code should generate a form with 3 buttons that don't do anything, since we haven't provided any action functions.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Lets now add code that does this, by creating the following object in our route, returning it with the model, and passing it to the component");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Notice above that the key items in the formActions object match up the the keys for the buttons in the schema.  Now, when you click the buttons on the form, they do something.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 22, 22, contextualElement);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.formActionSchema", ["loc", [null, [4, 22], [4, 44]]]]], [], []], "formActions", ["subexpr", "@mut", [["get", "model.formActions", ["loc", [null, [4, 57], [4, 74]]]]], [], []]], ["loc", [null, [4, 0], [4, 77]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [14, 0], [71, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [76, 0], [100, 17]]]], ["block", "highlight-js", [], [], 2, null, ["loc", [null, [102, 0], [104, 17]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/demos/basic-usage", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 68,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/basic-usage.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/basic-usage.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nconst basicObject = {\n  \"schema\": {\n    \"title\":\"User Feedback\",\n    \"description\":\"What do you think about Alpaca?\",\n    \"type\":\"object\",\n    \"properties\": {\n      \"name\": {\n        \"type\":\"string\",\n        \"title\":\"Name\"\n      },\n      \"feedback\": {\n        \"type\":\"string\",\n        \"title\":\"Feedback\"\n      },\n      \"ranking\": {\n        \"type\":\"string\",\n        \"title\":\"Ranking\",\n        \"enum\":['excellent','ok','so so']\n      }\n    }\n  },\n  \"options\": {\n    \"helper\": \"Tell us what you think about Alpaca!\",\n    \"fields\": {\n      \"name\": {\n        \"size\": 20,\n        \"helper\": \"Please enter your name.\",\n        \"placeholder\": \"Enter your name\"\n      },\n      \"feedback\" : {\n        \"type\": \"textarea\",\n        \"rows\": 5,\n        \"cols\": 40,\n        \"helper\": \"Please enter your feedback.\"\n      },\n      \"ranking\": {\n        \"type\": \"select\",\n        \"helper\": \"Select your ranking.\",\n        \"optionLabels\": [\"Awesome!\", \"It's Ok\", \"Hmm...\"]\n      }\n    }\n  }\n};\n\nexport default Ember.Route.extend({\n  model() {\n    return basicObject;\n  }\n});\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 72,
              "column": 0
            },
            "end": {
              "line": 74,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/basic-usage.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/basic-usage.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model}}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 76,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/basic-usage.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Basic Usage");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form is generated using json schema passed to an ember component.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("ember-cli-dynamic-forms are powered by ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://alpacajs.org");
        var el3 = dom.createTextNode("alpacajs");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", an open source dynamic form library for jquery.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To get started with ember-cli-dynamic-forms, all you need is a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://json-schema.org/");
        var el3 = dom.createTextNode("json-schema");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" compliant object for alpacajs to describe your form.  Below we make this object available as the model within a route.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("For tips on creating alpacajs forms, read their ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.alpacajs.org/documentation.html");
        var el3 = dom.createTextNode("documentation");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.alpacajs.org/tutorial.html");
        var el3 = dom.createTextNode("tutorial");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", and ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.alpacajs.org/examples.html");
        var el3 = dom.createTextNode("examples");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Once the object is made available, you can use it within your template to render the form.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 18, 18, contextualElement);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.basicObject", ["loc", [null, [5, 22], [5, 39]]]]], [], []]], ["loc", [null, [5, 0], [5, 41]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [15, 0], [68, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [72, 0], [74, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/demos/change-action", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/change-action.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/controller/demos/change-action.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("\nimport Ember from 'ember';\n\nexport default Ember.Controller.extend({\n  actions: {\n    updateOnChange(event) {\n      const propertyName = event.target.name;\n      const value = event.target.value;\n      this.send('updateModel', propertyName, value);\n    }\n  }\n});\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 0
            },
            "end": {
              "line": 88,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/change-action.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/change-action.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("\nimport Ember from 'ember';\n\nexport default Ember.Route.extend({\n  data:  Ember.Object.create({\n  name: 'Todd Jordan',\n  feedback: 'Ember + Alpaca = Awesome',\n    ranking: 'excellent'\n  }),\n\n  actions: {\n    updateModel(propertyName, value) {\n      Ember.Logger.debug('changed', propertyName, value);\n      this.set(`data.${propertyName}`, value);\n    }\n  },\n\n  model() {\n    const schema = {\n      \"schema\": {\n        \"title\":\"User Feedback\",\n        \"description\":\"What do you think about Alpaca?\",\n        \"type\":\"object\",\n        \"properties\": {\n          \"name\": {\n            \"type\":\"string\",\n            \"title\":\"Name\"\n          },\n          \"feedback\": {\n            \"type\":\"string\",\n            \"title\":\"Feedback\"\n          },\n          \"ranking\": {\n            \"type\":\"string\",\n            \"title\":\"Ranking\",\n            \"enum\":['excellent','ok','so so']\n          }\n        }\n      }\n    };\n\n    return {\n      schema,\n      data: this.get('data')\n    };\n  }\n});\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 0
            },
            "end": {
              "line": 97,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/change-action.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/change-action.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model.schema\n    data=model.data\n    changeAction=(action \"updateOnChange\")}}\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 98,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/change-action.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Change Actions");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form has a closure action that will update the text below as the form is updated");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Model Values");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("name: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("feedback: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("ranking: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The dynamic-form component supports the data down actions up (DDAU) pattern by taking an action that will be executed whenever a rendered form field changes.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In the example our controller defines a closure action that will receive events from our dynamic form component, pull out the field name and value, and then send an action to the server.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The route sets up a dynamic form schema as well as data to prepopulate it with.  It also uses the update action to update the data model.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Finally, the template defines a dynamic-form with a closure action that will provide the controller action.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[4] = dom.createMorphAt(fragment, 16, 16, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 24, 24, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.schema", ["loc", [null, [5, 22], [5, 34]]]]], [], []], "data", ["subexpr", "@mut", [["get", "model.data", ["loc", [null, [5, 40], [5, 50]]]]], [], []], "changeAction", ["subexpr", "action", ["updateOnChange"], [], ["loc", [null, [5, 64], [5, 89]]]]], ["loc", [null, [5, 0], [5, 92]]]], ["content", "model.data.name", ["loc", [null, [10, 12], [10, 31]]]], ["content", "model.data.feedback", ["loc", [null, [11, 16], [11, 39]]]], ["content", "model.data.ranking", ["loc", [null, [12, 15], [12, 37]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [21, 0], [35, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [39, 0], [88, 17]]]], ["block", "highlight-js", [], [], 2, null, ["loc", [null, [92, 0], [97, 17]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/demos/data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 83,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/data.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nconst Feedback = Ember.Object.extend({\n  name: Ember.computed('firstName', 'lastName', function () {\n    return `${this.get('firstName')} ${this.get('lastName')}`;\n  })\n});\n\nconst basicSchema = {\n  \"schema\": {\n    \"title\":\"User Feedback\",\n    \"description\":\"What do you think about Alpaca?\",\n    \"type\":\"object\",\n    \"properties\": {\n      \"name\": {\n        \"type\":\"string\",\n        \"title\":\"Name\"\n      },\n      \"feedback\": {\n        \"type\":\"string\",\n        \"title\":\"Feedback\"\n      },\n      \"ranking\": {\n        \"type\":\"string\",\n        \"title\":\"Ranking\",\n        \"enum\":['excellent','ok','so so']\n      }\n    }\n  },\n  \"options\": {\n    \"focus\":false,\n    \"helper\": \"Tell us what you think about Alpaca!\",\n    \"fields\": {\n      \"name\": {\n        \"size\": 20,\n        \"helper\": \"Please enter your name.\",\n        \"placeholder\": \"Enter your name\"\n      },\n      \"feedback\" : {\n        \"type\": \"textarea\",\n        \"rows\": 5,\n        \"cols\": 40,\n        \"helper\": \"Please enter your feedback.\"\n      },\n      \"ranking\": {\n        \"type\": \"select\",\n        \"helper\": \"Select your ranking.\",\n        \"optionLabels\": [\"Awesome!\", \"It's Ok\", \"Hmm...\"]\n      }\n    }\n  }\n};\n\nexport default Ember.Route.extend({\n\n  model() {\n    const data = Feedback.create({\n      firstName: 'Todd',\n      lastName: 'Jordan',\n      feedback: 'Ember + Alpaca = Awesome',\n      ranking: 'excellent'\n    });\n\n    return {\n      basicSchema,\n      data\n    }\n  }\n});");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 85,
              "column": 0
            },
            "end": {
              "line": 87,
              "column": 13
            }
          },
          "moduleName": "dummy/templates/demos/data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/data.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("{{dynamic-form schema=model.basicSchema data=model.data}}\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 89,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/data.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Data");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form has data pre-filled in its fields, provided apart from its schema.\nThe component will take both ember objects and plain JavaScript objects as arguments.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The dynamic-form component also takes a data parameter to populate fields.\nIt will populate any field that has a matching key in the data object.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In the form example above we pass in an ember object called Feedback with a computed property as our data argument.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.basicModel", ["loc", [null, [5, 22], [5, 38]]]]], [], []], "data", ["subexpr", "@mut", [["get", "model.data", ["loc", [null, [5, 44], [5, 54]]]]], [], []]], ["loc", [null, [5, 0], [5, 56]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [13, 0], [83, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [85, 0], [87, 30]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/demos/filter-rules", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/filter-rules.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/forms/filter-rules/admin-only.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nexport default Ember.Object.extend({\n  filter(key, schemaObj) {\n    const fieldOption = schemaObj.options.fields[key];\n    //could disable based on whether the user has admin role (user info loaded via service)\n    fieldOption.disabled = true;\n  }\n});");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 0
            },
            "end": {
              "line": 89,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/filter-rules.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/filter-rules.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nexport default Ember.Route.extend({\n\nconst basicFilterRule =\n{\n  \"schema\": {\n    \"title\":\"User Feedback\",\n    \"description\":\"What do you think about Alpaca?\",\n    \"type\":\"object\",\n    \"properties\": {\n      \"name\": {\n        \"type\":\"string\",\n        \"title\":\"Name\"\n      },\n      \"feedback\": {\n        \"type\":\"string\",\n        \"title\":\"Feedback\"\n      },\n      \"ranking\": {\n        \"type\":\"string\",\n        \"title\":\"Ranking\",\n        \"enum\":['excellent','ok','so so']\n      }\n    }\n  },\n  \"options\": {\n    \"helper\": \"Tell us what you think about Alpaca!\",\n    \"fields\": {\n      \"name\": {\n        \"size\": 20,\n        \"helper\": \"Please enter your name.\",\n        \"placeholder\": \"Enter your name\",\n        \"filter-rules\": [\"admin-only\"]\n      },\n      \"feedback\" : {\n        \"type\": \"textarea\",\n        \"rows\": 5,\n        \"cols\": 40,\n        \"helper\": \"Please enter your feedback.\"\n      },\n      \"ranking\": {\n        \"type\": \"select\",\n        \"helper\": \"Select your ranking.\",\n        \"optionLabels\": [\"Awesome!\", \"It's Ok\", \"Hmm...\"]\n      }\n    }\n  }\n};\n\n  model() {\n    const data = Ember.Object.create({\n      name: \"Todd Jordan\"\n    });\n    return Ember.Object.create({ basicFilterRule, data });\n  }\n});");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 91,
              "column": 0
            },
            "end": {
              "line": 91,
              "column": 140
            }
          },
          "moduleName": "dummy/templates/demos/filter-rules.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/filter-rules.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model.basicFilterRule data=model.data}}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 93,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/filter-rules.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Filter Rules");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nThis form uses a filter rule to disable the name field.  Filter rules can make changes to the form schema based on runtime information.\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Filter rules are objects that pre-process the schema prior to render.  They are used to modify the form based on runtime context, such as modifying form visibility or enabled state based on a logged in user's permissions.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("We'll show an example where we will use a filter rule to disable the name field, as it would having checked a user's permissions.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To create a filter rule, we'll use the ember-cli filter-rule generate command:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember g dynamic-form-filter-rule admin-only");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ... which will generate the file ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/app/dynamic-forms/filter-rules/admin-only.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Filter rules may be placed in the schema on a field with a key of \"filter-rule\". The filter function is passed the field ID its defined under and a reference to the schema object.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("We place the filter rule placed under ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options.fields.name.filter-rules");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 16, 16, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 22, 22, contextualElement);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.basicFilterRule", ["loc", [null, [4, 22], [4, 43]]]]], [], []], "data", ["subexpr", "@mut", [["get", "model.data", ["loc", [null, [4, 49], [4, 59]]]]], [], []]], ["loc", [null, [4, 0], [4, 62]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [17, 0], [27, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [31, 0], [89, 17]]]], ["block", "highlight-js", [], [], 2, null, ["loc", [null, [91, 0], [91, 157]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/demos/formatting", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/formatting.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/forms/formatters/proper-name.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nexport default Ember.Object.extend({\n  format() {\n    const originalValue = this.getValue();\n    const newValue = str.replace(/\\w\\S*/g, function(originalValue){\n      return originalValue.charAt(0).toUpperCase() + originalValue.substr(1).toLowerCase();\n    });\n    this.setValue(newValue);\n  }\n});");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 0
            },
            "end": {
              "line": 77,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/formatting.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/formatters.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\nconst basicFormatting = {\n  \"schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"name\": {\n        \"type\": \"string\"\n      },\n      \"age\": {\n        \"type\": \"number\",\n        \"minimum\": 0\n      },\n      \"beverage\": {\n        \"type\": \"string\",\n        \"enum\": [\"water\", \"soda\", \"beer\", \"wine\"]\n      }\n    }\n  },\n  \"options\": {\n    \"focus\":false,\n    \"fields\": {\n      \"name\": {\n        \"label\": \"Name\",\n        \"events\": {\n          \"change\": \"proper-name\"\n        }\n      },\n      \"age\": {\n        \"label\": \"Age\",\n        \"type\": \"integer\",\n        \"slider\": true\n      },\n      \"beverage\": {\n        \"label\": \"Choice of Beverage\",\n        \"slider\": true,\n        \"validator\": \"drinking-age\"\n      }\n    }\n  }\n};\n\nexport default Ember.Route.extend({\n  model() {\n    return Ember.Object.create({ basicFormatting });\n  }\n});");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 80,
              "column": 0
            },
            "end": {
              "line": 82,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/formatting.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/formatting.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model.basicFormatting}}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 84,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/formatting.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Formatting");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form uses a formatter to change the first letter of each word in name to upper case");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The  ember-cli-dynamic-forms addon allows you to provide reusable formatting logic.  Formatting logic is code that runs on a\n  field when it changes, such as phone number or monetary formatting. ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Formatters are defined in ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/app/dynamic-forms/formatters");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" and is made available to the form as a change event.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("For an example, lets create a formatter that ensures the first letter of you name is capitalized.  We'll start by creating an formatter using the ember-cli blueprint generate command:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember g dynamic-form-formatter proper-name");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ... which will generate the file ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/app/forms/formatters/proper-name.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nIf you add a formatter to a field's change even option, the function will run when you change that field.  We will add the formatter to the name field below.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nUsing formatters requires no change to the component definition.\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 16, 16, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 18, 18, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.basicFormatting", ["loc", [null, [4, 22], [4, 43]]]]], [], []]], ["loc", [null, [4, 0], [4, 45]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [15, 0], [27, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [31, 0], [77, 17]]]], ["block", "highlight-js", [], [], 2, null, ["loc", [null, [80, 0], [82, 17]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/demos/schema-updates", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 0
            },
            "end": {
              "line": 60,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/schema-updates.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/actions.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("\n\nimport Ember from 'ember';\n\nexport default Ember.Controller.extend({\n  _schemaTitle: '',\n  _feedbackData: '',\n  data: {},\n  schemaTitle: Ember.computed.alias('model.schema.title'),\n  feedbackData: Ember.computed.alias('data.feedback'),\n  actions: {\n    setTitle() {\n      let newTitle = this.get('_schemaTitle');\n        if (newTitle) {\n          this.set('schemaTitle', newTitle);\n          this.set('_schemaTitle', '');\n          this.notifyPropertyChange('model');\n        }\n    },\n    setFeedback() {\n      let newFeedback = this.get('_feedbackData');\n      if (newFeedback) {\n        this.set('feedbackData', newFeedback);\n        this.set('_feedbackData', '');\n        this.notifyPropertyChange('model');\n      }\n    }\n  }\n});\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 64,
              "column": 0
            },
            "end": {
              "line": 66,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/schema-updates.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/schema-updates.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model data=data}}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 67,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/schema-updates.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode(" Dynamic Schema and Data Updates ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode(" Changes in the schema or data passed down into the dynamic-form component will cause the component to re-render. ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form col-md-6");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Schema Title:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("Set title");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Feedback Data:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("Set feedback");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The controller code for the example above is shown below:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode(" And the dynamic-form is rendered like:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(element0, [3, 1]);
        var element2 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[4] = dom.createAttrMorph(element2, 'class');
        morphs[5] = dom.createElementMorph(element2);
        morphs[6] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        morphs[8] = dom.createMorphAt(fragment, 18, 18, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "_schemaTitle", ["loc", [null, [7, 22], [7, 34]]]]], [], []], "type", "text", "class", "form-control", "placeholder", ["subexpr", "@mut", [["get", "schemaTitle", ["loc", [null, [7, 80], [7, 91]]]]], [], []]], ["loc", [null, [7, 8], [7, 93]]]], ["attribute", "class", ["concat", ["btn ", ["subexpr", "unless", [["get", "_schemaTitle.length", ["loc", [null, [10, 58], [10, 77]]]], "disabled"], [], ["loc", [null, [10, 49], [10, 90]]]]]]], ["element", "action", ["setTitle"], [], ["loc", [null, [10, 16], [10, 37]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "_feedbackData", ["loc", [null, [14, 25], [14, 38]]]]], [], []], "class", "form-control", "placeholder", ["subexpr", "@mut", [["get", "feedbackData", ["loc", [null, [14, 72], [14, 84]]]]], [], []]], ["loc", [null, [14, 8], [14, 86]]]], ["attribute", "class", ["concat", ["btn ", ["subexpr", "unless", [["get", "_feedbackData.length", ["loc", [null, [17, 61], [17, 81]]]], "disabled"], [], ["loc", [null, [17, 52], [17, 94]]]]]]], ["element", "action", ["setFeedback"], [], ["loc", [null, [17, 16], [17, 40]]]], ["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model", ["loc", [null, [23, 22], [23, 27]]]]], [], []], "data", ["subexpr", "@mut", [["get", "data", ["loc", [null, [23, 33], [23, 37]]]]], [], []]], ["loc", [null, [23, 0], [23, 39]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [29, 0], [60, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [64, 0], [66, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/demos/validation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/validation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/forms/validations/drinking-age.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nexport default Ember.Object.extend({\n\n  validate(callback) {\n    var value = this.getValue();\n    var age = this.getParent().childrenByPropertyId[\"age\"].getValue();\n    if ((value === \"beer\" || value === \"wine\") && age > 21) {\n      callback({\"status\": false, \"message\": \"You are too young to drink alcohol!\"});\n      return;\n    }\n  }\n});\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 0
            },
            "end": {
              "line": 83,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/validation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/routes/demos/validation.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("import Ember from 'ember';\n\nconst basicValidation = {\n  \"schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"name\": {\n        \"type\": \"string\"\n      },\n      \"age\": {\n        \"type\": \"number\",\n        \"minimum\": 0\n      },\n      \"beverage\": {\n        \"type\": \"string\",\n        \"enum\": [\"water\", \"soda\", \"beer\", \"wine\"]\n      }\n    }\n  },\n  \"options\": {\n    \"fields\": {\n      \"name\": {\n        \"label\": \"Name\",\n        \"events\": {\n          \"change\": \"lower-case\"\n        }\n      },\n      \"age\": {\n        \"label\": \"Age\",\n        \"type\": \"integer\",\n        \"slider\": true\n      },\n      \"beverage\": {\n        \"label\": \"Choice of Beverage\",\n        \"slider\": true,\n        \"validator\": \"drinking-age\"\n      }\n    }\n  }\n};\n\nexport default Ember.Route.extend({\n  model() {\n    return Ember.Object.create({ basicValidation });\n  }\n});\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 87,
              "column": 0
            },
            "end": {
              "line": 89,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/demos/validation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createTextNode("/app/templates/demos/validation.hbs");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("{{dynamic-form schema=model.basicValidation}}");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 90,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/demos/validation.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Validation");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This form uses a validator to ensure the age of the person allows them to choose beer as a beverage.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The ember-cli-dynamic-forms addon provides you with a way to define and apply reusable validations to your dynamic forms.  All you have to do is drop a JavaScript file in the ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/app/forms/validations");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" directory and its made available to your form as a validator, which can be applied to a form field, as it is updated.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Start by creating a custom validation using the ember-cli validation blueprint generate command:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember g dynamic-form-validator drinking-age");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ... which will generate the file ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/app/dynamic-forms/validation/drinking-age.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Now, validate that the age provided is appropriate when beer is selected:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Adding ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("drinking-age");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" to that directory will make that validation available as \"drinking-age\" within your form schema under the validator key.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In the example below we are validating that you are the correct age if you pick beer as your preferred beverage.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("We use our dynamic-form component as we normally would, passing in the schema object.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 16, 16, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 22, 22, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 26, 26, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.basicValidation", ["loc", [null, [4, 22], [4, 43]]]]], [], []]], ["loc", [null, [4, 0], [4, 45]]]], ["block", "highlight-js", [], [], 0, null, ["loc", [null, [15, 0], [30, 17]]]], ["block", "highlight-js", [], [], 1, null, ["loc", [null, [35, 0], [83, 17]]]], ["block", "highlight-js", [], [], 2, null, ["loc", [null, [87, 0], [89, 17]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-cli-dynamic-forms","version":"0.1.3+febc4145"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map