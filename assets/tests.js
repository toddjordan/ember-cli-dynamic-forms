define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/highlight-js.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/highlight-js.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/highlight-js.js should pass jshint.');
  });
});
define('dummy/tests/controllers/demos/change-action.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/demos/change-action.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/demos/change-action.js should pass jshint.');
  });
});
define('dummy/tests/controllers/demos/schema-updates.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/demos/schema-updates.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/demos/schema-updates.js should pass jshint.');
  });
});
define('dummy/tests/dynamic-forms/filter-rules/admin-only.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - dynamic-forms/filter-rules/admin-only.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dynamic-forms/filter-rules/admin-only.js should pass jshint.');
  });
});
define('dummy/tests/dynamic-forms/formatters/lower-case.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - dynamic-forms/formatters/lower-case.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dynamic-forms/formatters/lower-case.js should pass jshint.');
  });
});
define('dummy/tests/dynamic-forms/formatters/proper-name.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - dynamic-forms/formatters/proper-name.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dynamic-forms/formatters/proper-name.js should pass jshint.');
  });
});
define('dummy/tests/dynamic-forms/validations/drinking-age.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - dynamic-forms/validations/drinking-age.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dynamic-forms/validations/drinking-age.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/buttons-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

    (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:actions', {
        integration: true
    });

    var schemaObject = {
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
                    "submit": {}
                }
            }
        }
    };

    (0, _emberQunit.test)('should invoke provided action when button clicked', function (assert) {
        var _this = this;

        var testSchemaObject = _.clone(schemaObject, true);
        testSchemaObject.postRender = function () {
            _this.$('.alpaca-form-buttons-container button').click();
        };
        this.set('schemaObject', testSchemaObject);
        var done = assert.async();
        var submitAction = {
            submit: function submit() {
                assert.ok(true);
                done();
            }
        };
        this.set('actions', submitAction);
        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'fragmentReason': {
                        'name': 'missing-wrapper',
                        'problems': ['wrong-type']
                    },
                    'revision': 'Ember@2.5.1',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 57
                        }
                    }
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'formActions', ['subexpr', '@mut', [['get', 'actions', ['loc', [null, [1, 47], [1, 54]]]]], [], []]], ['loc', [null, [1, 0], [1, 57]]]]],
                locals: [],
                templates: []
            };
        })()));
    });
});
define('dummy/tests/integration/components/buttons-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/buttons-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/buttons-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/change-action-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  var schemaObject = {
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

  (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:changeAction', {
    integration: true
  });

  (0, _emberQunit.test)('should fire action on changes in form', function (assert) {
    var _this = this;

    var done = assert.async();
    this.on('changeAction', function (event) {
      assert.equal(event.target.value, 'todd');
      done();
    });

    var schema = _.clone(schemaObject, true);
    var postRender = function postRender() {
      _this.$('.alpaca-field-text input').val('todd').keyup();
    };
    this.set('postRender', postRender);
    this.set('schema', schema);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['postRender', ['subexpr', '@mut', [['get', 'postRender', ['loc', [null, [2, 30], [2, 40]]]]], [], []], 'schema', ['subexpr', '@mut', [['get', 'schema', ['loc', [null, [2, 48], [2, 54]]]]], [], []], 'changeAction', ['subexpr', 'action', ['changeAction'], [], ['loc', [null, [2, 68], [2, 91]]]]], ['loc', [null, [2, 4], [2, 93]]]]],
        locals: [],
        templates: []
      };
    })()));
  });

  (0, _emberQunit.test)('should fire action and perform postRender when defined on schema', function (assert) {
    var _this2 = this;

    var done = assert.async();
    this.on('changeAction', function (event) {
      assert.equal(event.target.value, 'todd');
      done();
    });

    var schema = _.clone(schemaObject, true);
    schema.postRender = function () {
      _this2.$('.alpaca-field-text input').val('todd').keyup();
    };
    this.set('schema', schema);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schema', ['loc', [null, [2, 26], [2, 32]]]]], [], []], 'changeAction', ['subexpr', 'action', ['changeAction'], [], ['loc', [null, [2, 46], [2, 69]]]]], ['loc', [null, [2, 4], [2, 71]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
define('dummy/tests/integration/components/change-action-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/change-action-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/change-action-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/data-binding-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var schemaObject = {
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

  var dataObject = {
    "name": "Todd Jordan",
    "ranking": "not too shabby"
  };

  var EmberData = _ember['default'].Object.extend({
    name: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    })

  });

  (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:data-binding', {
    integration: true
  });

  (0, _emberQunit.test)('should update input value when model updated', function (assert) {
    var _this = this;

    var fixtureSchema = _.clone(schemaObject, true);
    var done = assert.async();
    fixtureSchema.postRender = function () {
      assert.equal(_this.$('.alpaca-field-text input').val(), 'Todd Jordan');
      dataObject.name = 'Jeremy Rowe';
      fixtureSchema.postRender = function () {
        assert.equal(_this.$('.alpaca-field-text input').val(), 'Jeremy Rowe');
        done();
      };
      _this.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.5.1',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 52
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'data', ['subexpr', '@mut', [['get', 'dataObject', ['loc', [null, [1, 40], [1, 50]]]]], [], []]], ['loc', [null, [1, 0], [1, 52]]]]],
          locals: [],
          templates: []
        };
      })()));
    };
    this.set('schemaObject', fixtureSchema);
    this.set('dataObject', dataObject);
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 52
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'data', ['subexpr', '@mut', [['get', 'dataObject', ['loc', [null, [1, 40], [1, 50]]]]], [], []]], ['loc', [null, [1, 0], [1, 52]]]]],
        locals: [],
        templates: []
      };
    })()));
  });

  (0, _emberQunit.test)('should work with an ember object as data', function (assert) {
    var _this2 = this;

    var fixtureSchema = _.clone(schemaObject, true);
    var done = assert.async();
    fixtureSchema.postRender = function () {
      assert.equal(_this2.$('.alpaca-field-text input').val(), 'Todd Jordan');
      fixtureSchema.postRender = function () {
        assert.equal(_this2.$('.alpaca-field-text input').val(), 'Jeremy Rowe');
        done();
      };
      _this2.get('dataObject').set('firstName', 'Jeremy');
      _this2.get('dataObject').set('lastName', 'Rowe');
      _this2.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.5.1',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 52
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'data', ['subexpr', '@mut', [['get', 'dataObject', ['loc', [null, [1, 40], [1, 50]]]]], [], []]], ['loc', [null, [1, 0], [1, 52]]]]],
          locals: [],
          templates: []
        };
      })()));
    };
    this.set('schemaObject', fixtureSchema);
    this.set('dataObject', EmberData.create({
      firstName: 'Todd',
      lastName: 'Jordan',
      ranking: 'excellent'
    }));
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 52
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'data', ['subexpr', '@mut', [['get', 'dataObject', ['loc', [null, [1, 40], [1, 50]]]]], [], []]], ['loc', [null, [1, 0], [1, 52]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
//import Ember from 'ember';
define('dummy/tests/integration/components/data-binding-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/data-binding-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/data-binding-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/dynamic-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  var basicObject = {
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

  (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:basic', {
    integration: true
  });

  (0, _emberQunit.test)('should render form from valid schema object', function (assert) {
    var _this = this;

    var done = assert.async();
    basicObject["postRender"] = function () {
      assert.ok(_this.$('.alpaca-field-text input').length, 'input field exists');
      assert.ok(_this.$('.alpaca-field-radio').length, 'radio group exists');
      done();
    };
    this.set('basicObject', basicObject);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 35
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'basicObject', ['loc', [null, [1, 22], [1, 33]]]]], [], []]], ['loc', [null, [1, 0], [1, 35]]]]],
        locals: [],
        templates: []
      };
    })()));
  });

  (0, _emberQunit.test)('should render form from valid schema string', function (assert) {
    var _this2 = this;

    var done = assert.async();
    var postRenderFn = function postRenderFn() {
      assert.ok(_this2.$('.alpaca-field-text input').length, 'input field exists');
      assert.ok(_this2.$('.alpaca-field-radio').length, 'radio group exists');
      done();
    };
    var basicString = JSON.stringify(basicObject);
    this.set('postRenderFn', postRenderFn);
    this.set('basicString', basicString);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 59
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'basicString', ['loc', [null, [1, 22], [1, 33]]]]], [], []], 'postRender', ['subexpr', '@mut', [['get', 'postRenderFn', ['loc', [null, [1, 45], [1, 57]]]]], [], []]], ['loc', [null, [1, 0], [1, 59]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
define('dummy/tests/integration/components/dynamic-form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/dynamic-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dynamic-form-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/filter-rules-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  var basicObject = {
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
          "filter-rules": ["admin-only"]
        }
      }
    }
  };

  var filterRule = _ember['default'].Object.extend({
    filter: function filter(key, schemaObj) {
      var fieldOption = schemaObj.options.fields[key];
      fieldOption.disabled = true;
    }
  });

  (0, _emberQunit.moduleForComponent)('dynamic-form', 'Integration | Component | dynamic-form:filter-rules', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('admin-only:forms.filter-rules', filterRule);
    }
  });

  (0, _emberQunit.test)('should disable a field based a users role', function (assert) {
    var _this = this;

    var done = assert.async();
    basicObject['postRender'] = function () {
      assert.ok(_this.$('.alpaca-field-text input').prop('disabled'), 'field is disabled');
      done();
    };
    this.set('basicObject', basicObject);
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 35
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'basicObject', ['loc', [null, [1, 22], [1, 33]]]]], [], []]], ['loc', [null, [1, 0], [1, 35]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
define('dummy/tests/integration/components/filter-rules-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/filter-rules-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/filter-rules-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/formatters-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  var formatter = _ember['default'].Object.extend({
    format: function format() {
      this.setValue("ALPACA!");
    }
  });

  var basicObject = {
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

  (0, _emberQunit.moduleForComponent)('dynamic-form', 'Integration | Component | dynamic-form:formatters', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('drinking-age:dynamic-forms.formatters', formatter);
    }
  });

  (0, _emberQunit.test)('applies a custom formatter when the user tabs away from the drinking age field', function (assert) {
    var _this = this;

    var done = assert.async();
    basicObject["postRender"] = function () {
      _this.$('.alpaca-field-text input').val('matters not').change();
      assert.equal(_this.$('.alpaca-field-text input').val(), "ALPACA!");
      done();
    };

    this.set('basicObject', basicObject);
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 35
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'basicObject', ['loc', [null, [1, 22], [1, 33]]]]], [], []]], ['loc', [null, [1, 0], [1, 35]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
define('dummy/tests/integration/components/formatters-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/formatters-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/formatters-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/null-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  var schemaObject = {
    "schema": {
      "title": "What do you think of Alpaca?",
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
          "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
        }
      }
    },
    "view": "bootstrap-display-horizontal"
  };

  var dataObject = {
    "name": "Todd Jordan",
    "ranking": null,
    "feedback": null
  };

  (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:null-data', {
    integration: true
  });

  (0, _emberQunit.test)('should render empty string for null value in display mode', function (assert) {
    var _this = this;

    var fixtureSchema = _.clone(schemaObject, true);
    var done = assert.async();
    fixtureSchema.postRender = function () {
      assert.equal(_this.$('.alpaca-control[name="name"]').text(), "Todd Jordan");
      assert.equal(_this.$('.alpaca-control[name="feedback"]').text(), "");
      assert.equal(_this.$('.alpaca-control[name="ranking"]').text().trim(), "");
      done();
    };
    this.set('schemaObject', fixtureSchema);
    this.set('dataObject', dataObject);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 52
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'schemaObject', ['loc', [null, [1, 22], [1, 34]]]]], [], []], 'data', ['subexpr', '@mut', [['get', 'dataObject', ['loc', [null, [1, 40], [1, 50]]]]], [], []]], ['loc', [null, [1, 0], [1, 52]]]]],
        locals: [],
        templates: []
      };
    })()));
  });
});
define('dummy/tests/integration/components/null-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/null-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/null-data-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/validation-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  var validationObject = {
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

  var validator = _ember['default'].Object.extend({
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

  (0, _emberQunit.moduleForComponent)('/dynamic-form', 'Integration | Component | dynamic-form:validations', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('drinking-age:forms.validations', validator);
    }
  });

  (0, _emberQunit.test)('should replace validator string with corresponding function', function (assert) {
    var _this = this;

    return new _ember['default'].RSVP.Promise(function (resolve) {
      var postRenderFn = function postRenderFn() {
        _this.$('input[name="name"]').val('Todd');
        _this.$('input[name="age"]').val('15');
        _this.$('select').change(function () {
          _ember['default'].run.later(function () {
            resolve();
          }, 1000);
        });
        _this.$('select').val('beer').change();
      };
      _this.set('postRenderFn', postRenderFn);
      _this.set('validationObject', validationObject);
      _this.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.5.1',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 64
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'dynamic-form', [], ['schema', ['subexpr', '@mut', [['get', 'validationObject', ['loc', [null, [1, 22], [1, 38]]]]], [], []], 'postRender', ['subexpr', '@mut', [['get', 'postRenderFn', ['loc', [null, [1, 50], [1, 62]]]]], [], []]], ['loc', [null, [1, 0], [1, 64]]]]],
          locals: [],
          templates: []
        };
      })()));
    }).then(function () {
      assert.equal(_this.$('.alpaca-message').text().trim(), 'You are too young to drink alcohol!');
    });
  });
});
define('dummy/tests/integration/components/validation-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/validation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/validation-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/actions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/actions.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/basic-usage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/basic-usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/basic-usage.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/change-action.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/change-action.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/change-action.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/data.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/data.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/data.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/filter-rules.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/filter-rules.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/filter-rules.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/formatting.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/formatting.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/formatting.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/schema-updates.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/schema-updates.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/schema-updates.js should pass jshint.');
  });
});
define('dummy/tests/routes/demos/validation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/demos/validation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/demos/validation.js should pass jshint.');
  });
});
define('dummy/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map