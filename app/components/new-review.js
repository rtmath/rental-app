import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        rating: this.get('rating') ? this.get('rating') : "No rating selected",
        content: this.get('content') ? this.get('content') : "No comment",
        rental: this.get('rental')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
