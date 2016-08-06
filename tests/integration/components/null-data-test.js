import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

const schemaObject = {
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


const dataObject = {
  "name": "Todd Jordan",
  "ranking": null,
  "feedback": null
};

moduleForComponent('/dynamic-form', 'Integration | Component | dynamic-form:null-data', {
  integration: true
});

test('should render empty string for null value in display mode', function (assert) {
  let fixtureSchema = _.clone(schemaObject, true);
  let done = assert.async();
  fixtureSchema.postRender = () => {
    assert.equal(this.$('.alpaca-control[name="name"]').text(), "Todd Jordan");
    assert.equal(this.$('.alpaca-control[name="feedback"]').text(), "");
    assert.equal(this.$('.alpaca-control[name="ranking"]').text().trim(), "");
    done();
  };
  this.set('schemaObject', fixtureSchema);
  this.set('dataObject', dataObject);
  this.render(hbs`{{dynamic-form schema=schemaObject data=dataObject}}`);


});
