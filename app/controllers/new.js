import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model').save().then(
        () => this.transitionToRoute('calendar'),
        () => console.log('model did not save')
      );
    },
    cancel(){
      this.get('model').deleteRecord();
      return true;
    }
  }
});
