import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies', {path:'/'}, function(){
    this.route('movie', {path:':movie_id'}, function() {
      this.route('details', function() {
        this.route('edit');
      });
    });
  });
});

export default Router;
