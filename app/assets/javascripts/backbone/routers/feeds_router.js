App.Routers.FeedsRouter = Backbone.Router.extend({
	feeds: {},
	
	initialize: function() {
		// create a new object to hold feeds collection
		feeds = new App.Collections.Feeds();
	},
	
	routes: {
		''      : 'index',
		'/index': 'index',
		'/new'  : 'newFeed',
		'/:id'  : 'show'
	},
	
	index: function() {
		feeds.fetch({
			success: function() {
				var view = new App.Views.IndexView({ feeds: feeds });
				$('#app').html(view.render().el);
			},
			error: function() {
				new Error({ message: "Error loading feeds" });
			}
		});
	},
	
	show: function(id) {
		var feed = feeds.get(id);
		var view = new App.Views.ShowView({ model: feed });
		
		$('#app').html(view.render().el);
	},
	
	newFeed: function() {
		var view = new App.Views.NewView({ collection: feeds });
		
		$('#app').html(view.render().el);
	}
});
