import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, component) {
    Ember.Logger.debug('render!');
    component.set('layout', Ember.computed(function () {
      return Ember.HTMLBars.compile(`
        <b>hello world</b>
      `);
    }));
    // iterate fields in schema
    //let fields = schema.schema.properties;

    // load component equivs from factory

    // attach to DOM or parent component
  }
});
