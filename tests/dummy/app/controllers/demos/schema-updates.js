import Ember from 'ember';

export default Ember.Controller.extend({
  _schemaTitle: '',
  _feedbackData: '',
  data: {},
  schemaTitle: Ember.computed.alias('model.schema.title'),
  feedbackData: Ember.computed.alias('data.feedback'),
  actions: {
    setTitle() {
      let newTitle = this.get('_schemaTitle');
        if (newTitle) {
          this.set('schemaTitle', newTitle);
          this.set('_schemaTitle', '');
          this.notifyPropertyChange('model');
        }
    },
    setFeedback() {
      let newFeedback = this.get('_feedbackData');
      if (newFeedback) {
        this.set('feedbackData', newFeedback);
        this.set('_feedbackData', '');
        this.notifyPropertyChange('model');
      }
    }
  }
});
