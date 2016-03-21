import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, component) {
    component.set('layout', Ember.computed(function () {
      return Ember.HTMLBars.compile(`
        {{#each fields as |field|}}
          {{component field.type}}
        {{/each}}
      `);
    }));
    // iterate fields in schema
    //let fields = schema.schema.properties;

    // load component equivs from factory

    // attach to DOM or parent component
  }
});
