App.Views.FeedView = Backbone.View.extend({
	render: function() {
		var template = JST["backbone/templates/feeds/feed"];
    $(this.el).html(template(this.model.attributes))
		return this;
	}
});