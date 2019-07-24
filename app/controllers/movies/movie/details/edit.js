import Controller from '@ember/controller';

export default Controller.extend({
  isFalse: false,
  // isTest: 
  actions: {
    updateDetails() {
      this.set('model.title', document.getElementById('editTitle').value )
      this.set('model.director', document.getElementById('editDirector').value )
      this.set('model.release', document.getElementById('editRelease').value )
      this.set('model.length', document.getElementById('editDuration').value )
      this.set('model.genre', document.getElementById('editGenre').value )
      this.set('model.actors', document.getElementById('editActors').value )
      this.set('model.plot', document.getElementById('editPlot').value )
      if(document.getElementById('editRating') <= 5 || document.getElementById('editRating') >= 1) {
        this.set('model.rating', document.getElementById('editRating'))
      }
    }
  }
});
