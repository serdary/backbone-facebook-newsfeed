App.Models.Feed = Backbone.Model.extend({
	defaults: {
		from_name: null,
		from_id: null,
		message: null,
		feed_type: null,
		like_count: null 
	}
});

App.Collections.Feeds = Backbone.Collection.extend({
	model: App.Models.Feed,
	url: '/feeds'
});