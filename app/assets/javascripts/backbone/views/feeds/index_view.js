App.Views.IndexView = Backbone.View.extend({
	initialize: function() {
		this.feeds = this.options.feeds;
	},
	
	addAll: function() {
		if (this.feeds === undefined || this.feeds.models.length < 1) {
    		$(this.el).find("tbody").append('no feeds yet');
    		return;
		}

		for (var i = 0; i < this.feeds.models.length; i++)
			this.addOne(this.feeds.models[i].attributes);
	},

	addOne: function(feed) {

		var view = '';
		var template = '<tr><td>[from_name]</td><td>[message]</td><td>[feed_type]</td><td>[like_count]</td><td><a href="#/[id]">Show</td></tr>';
		view = template.replace('[from_name]', feed.from_name).replace('[message]', feed.message)
			.replace('[feed_type]', feed.feed_type).replace('[like_count]', feed.like_count).replace('[id]', feed.id);
		
    $(this.el).find("tbody").append(view);
/*

		var view = new App.Views.FeedView({ model: feed });
		$(this.el).find("tbody").append(view.render().el);*/
	},
	
	render: function() {
		var template = JST["backbone/templates/feeds/index"];
    $(this.el).html(template)

		this.addAll();
		return this;
	}
});