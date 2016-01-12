# ember-cli-dynamic-forms

[![npm version](https://badge.fury.io/js/ember-cli-dynamic-forms.svg)](https://badge.fury.io/js/ember-cli-dynamic-forms)
[![Build Status](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms.svg?branch=master)](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dynamic-forms.svg)](http://emberobserver.com/addons/ember-cli-dynamic-forms)

An Ember addon for creating dynamic forms, powered by [alpacajs](http://alpacajs.org).

## Installing

`ember install ember-cli-dynamic-forms`

## Upgrading

It's advisable to run `ember g ember-cli-dynamic-forms` between upgrades as dependencies may have been added, removed, or upgraded between releases. Please try this, along with clearing node_modules and bower_components before reporting issues after upgrading.

## Usage

```hbs
{{dynamic-form schema=schema}}
```

The schema variable can be in string or object form, but needs to be a valid json-schema alpaca form definition. See the [alpacajs website](http://alpacajs.org) for more information about building valid schemas.

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
