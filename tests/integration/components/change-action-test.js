import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const schemaObject = {
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

moduleForComponent('/dynamic-form' , 'Integration | Component | dynamic-form:changeAction', {
  integration: true
});

test('should fire action on changes in form', function (assert) {
  const done = assert.async();
  this.on('changeAction', function (event) {
    assert.equal(event.target.value, 'todd');
    done();
  });

  const schema = _.clone(schemaObject, true);
  let postRender = () => {
    this.$('.alpaca-field-text input').val('todd').keyup();
  };
  this.set('postRender', postRender);
  this.set('schema', schema);

  this.render(hbs`
    {{dynamic-form postRender=postRender schema=schema changeAction=(action 'changeAction')}}
  `);

});

test('should fire action and perform postRender when defined on schema', function (assert) {
  const done = assert.async();
  this.on('changeAction', function (event) {
    assert.equal(event.target.value, 'todd');
    done();
  });

  const schema = _.clone(schemaObject, true);
  schema.postRender = () => {
    this.$('.alpaca-field-text input').val('todd').keyup();
  };
  this.set('schema', schema);

  this.render(hbs`
    {{dynamic-form schema=schema changeAction=(action 'changeAction')}}
  `);

});
