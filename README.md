# ember-cli-dynamic-forms

[![Build Status](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms.svg?branch=master)](https://travis-ci.org/toddjordan/ember-cli-dynamic-forms)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dynamic-forms.svg)](http://emberobserver.com/addons/ember-cli-dynamic-forms)

An Ember addon for creating dynamic forms, powered by [alpacajs](http://alpacajs.org).

## Installing

`ember install ember-cli-dynamic-forms`

## Upgrading

It's advisable to run `ember g ember-cli-dynamic-forms` between upgrades as dependencies may have been added, removed, or upgraded between releases. Please try this, along with clearing node_modules and bower_components before reporting issues after upgrading.

## Usage

```hbs
{{dynamic-forms schema=schema postRender=postRenderFn}}
```

The schema variable can be in string or object form, but needs to be a valid json-schema alpaca form definition. See the [alpacajs website](http://alpacajs.org) for more information about building valid schemas.

The postRender attribute is optional and provided primarily for cases where your schema is being passed as a string.  You may also set the postRender function on your schema object.

## Roadmap

### Phase 1: Wrap Alpaca with an Ember component (Shipped!)

Basically wrap alpaca with an Ember component.

### Phase 2: Provide Convention Hooks for Reusable Form Assets (Coming January 2016)

Provide the ability to provide reusable assets to form definitions, such as validations, formatting, interactions, etc.  Leverage Ember's mechanisms for file resolution to load these assets.

### Phase 3: Provide Ember Data Hooks for Flexible Schema Options (Coming 1Q 2016)

Use ember data to provide an extensible way to load form configuration.  Provide the ability to pass a model object to the dynamic forms component.

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
