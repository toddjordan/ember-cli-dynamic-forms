/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-dynamic-forms',
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/handlebars/handlebars.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
    app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.js');
    app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.css');
    app.import(app.bowerDirectory + '/lodash/lodash.js');
  },
  isDevelopingAddon: function () {
    return false;
  }
};
