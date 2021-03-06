import Route from '@ember/routing/route';


export default Route.extend({
  model(params) {
    const movie = this.modelFor('movies');
    return movie.findBy('id', params.movie_id)
  }
});
