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
			this.addOne(this.feeds.models[i]);
	},

	addOne: function(feed) {
		var view = new App.Views.FeedView({ model: feed });
		$(this.el).find("tbody").append(view.render().el);
	},
	
	render: function() {
		var template = JST["backbone/templates/feeds/index"];
    $(this.el).html(template)

		this.addAll();
		return this;
	}
});