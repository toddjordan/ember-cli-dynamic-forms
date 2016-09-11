# ember-cli-dynamic-forms

[![npm version](https://badge.fury.io/js/ember-cli-dynamic-forms.svg)](https://badge.fury.io/js/ember-cli-dynamic-forms)
[![Build Status](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms.svg?branch=master)](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dynamic-forms.svg)](http://emberobserver.com/addons/ember-cli-dynamic-forms)

An Ember addon for creating dynamic forms, powered by [alpacajs](http://alpacajs.org).

## Installing

`ember install ember-cli-dynamic-forms`

For now, you'll get a jquery resolution prompt when running install.  You'll want to pick the 1.11.3 option.

## Upgrading

It's advisable to run `ember g ember-cli-dynamic-forms` between upgrades as dependencies may have been added, removed, or upgraded between releases. Please try this, along with clearing node_modules and bower_components before reporting issues after upgrading.

## Usage
Using ember-cli-dynamic-forms can be as simple as passing a json-schema compliant object into a component.  You can also provide the form with data and actions, either in the schema or with separate objects:

```hbs
{{dynamic-form schema=model.schemaObj data=model.dataObj formActions=formActionsObj}}
```

You can also create reusable form assets using ember-cli, such as validations and formatting rules:
`ember generate dynamic-form-validator drinking-age`

And you can reference them in your schema:
```
     "beverage": {
        "label": "Choice of Beverage",
        "slider": true,
        "validator": "drinking-age"
      }
```
For more details component usage and asset generation, see the [ember-cli-dynamic-forms documentation site](http://toddjordan.github.io/ember-cli-dynamic-forms/).

The schema variable can be in string or object form, but needs to be a valid json-schema alpaca form definition. See the [alpacajs website](http://alpacajs.org) for more information about building valid schemas.

## Excluding Assets
By default ember-cli-dynamic-forms imports bootstrap and alpaca assets to the broccoli tree. If you wish to disable this behaviour and use your own assets, simply specify it in your ember-cli-build.js.

```js
var app = new EmberApp({
  'ember-cli-dynamic-forms': {
    includeAssets: false, // disables the includion of all assets
    includeAlpacaStyles: false,  // disables just the inclusion of alpaca styles
    includeBootstrapAssets: false // disables just the inclusion of bootstrap assets whilst leaving the rest inplace
  }
});
```

## Development

### Setup

* `git clone` this repository
* `npm install`
* `bower install`

### Running Locally

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
