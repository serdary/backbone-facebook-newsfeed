App.Views.IndexView = Backbone.View.extend({
	initialize: function() {
		this.feeds = this.options.feeds;
	},
	
	addAll: function() {
		if (this.feeds === undefined || this.feeds.models.length < 1) {
    		$(this.el).find("tbody").append('no feeds yet');
    		return;
		}
		// TODO: use haml-js or jquery templates
		var view = '';
		var template = '<tr><td>[from_name]</td><td>[message]</td><td>[feed_type]</td><td>[like_count]</td><td><a href="#/[id]">Show</td></tr>';
		for (var i = 0; i < this.feeds.models.length; i++) {
			var feed = this.feeds.models[i].attributes;
			view += template.replace('[from_name]', feed.from_name).replace('[message]', feed.message)
				.replace('[feed_type]', feed.feed_type).replace('[like_count]', feed.like_count).replace('[id]', feed.id);
		}
		
    	$(this.el).find("tbody").append(view);
	},
	
	render: function() {
		var table = '<h1>Feeds</h1><a href="#/new">New Feed</a><table><tr><th>From</th><th>Message</th><th>Type</th><th>Like count</th></tr></table>';
		$(this.el).html(table);
		this.addAll();
		return this; // chain
	}
});