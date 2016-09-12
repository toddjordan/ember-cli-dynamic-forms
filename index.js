/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-dynamic-forms',
  included: function (app) {
    this._super.included(app);

    app.options = app.options || {}; // ensure options is actually set to prevent undefined errors
    var options = app.options['ember-cli-dynamic-forms'] || {}; // ensure we have an options object at the very least

    // opt out early if we don't want any assets
    if('includeAssets' in options && !options.includeAssets) {
      return;
    }

    app.import(app.bowerDirectory + '/handlebars/handlebars.js');

    // include bootstrap assets unless explicitly told otherwise
    if(!('includeBootstrapAssets' in options) || options.includeBootstrapAssets) {
      app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
      app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
        destDir: 'fonts'
      });
    }

    app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.js');
    // include alpaca styles unless explicitly told otherwise
    if(!('includeAlpacaStyles' in options) || options.includeAlpacaStyles) {
      app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.css');
    }

    app.import(app.bowerDirectory + '/lodash/lodash.js');

  },
  isDevelopingAddon: function () {
    return true;
  }
};
