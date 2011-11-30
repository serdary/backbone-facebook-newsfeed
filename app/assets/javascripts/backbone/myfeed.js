//= require_self
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

var App = {
  Models: {}, 
  Collections: {}, 
  Routers: {}, 
  Views: {},
  
  init: function() {
  	new App.Routers.FeedsRouter();
  	Backbone.history.start();
  }
}