/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
   */
  app.import('bower_components/lodash/lodash.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
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

  app.import('vendor/highlight/styles/zenburn.css');
  app.import('vendor/highlight/highlight.pack.js');
  return app.toTree();
};
