import Route from '@ember/routing/route';
const movies = [{
    id: 'inception',
    title: 'Inception',
    length: 235,
    director: 'Christopher Nolan',
    release: 1995,
    genre: 'Thriller',
    actors: ['Steve','Mike'],
    plot: 'This is the plot of the movie'
  },
  {
    id: 'singles', 
    title: 'Singles',
    length: 135,
    director: 'Chris Dolan',
    release: 2244,
    genre: 'Thriller',
    actors: ['Steve','Mike'],
    plot: 'This is the plot of the movie'
  }
  
]
export default Route.extend({
  model() {
    return movies
  }
});