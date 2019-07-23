import Controller from '@ember/controller';

export default Controller.extend({
  isActive: false,
  actions: {
    toggleShowMore() {
      this.toggleProperty('isActive')
    }
  }
});
