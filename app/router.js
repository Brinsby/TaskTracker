import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new', {
    path: '/calendar/new'
  });
  this.route('calendar');

  this.route('calendars', {
    path: '/calendar/:calendar_id'
  });

  this.route('edit', {
    path: '/calendar/:calendar_id/edit'
  });
});

export default Router;
