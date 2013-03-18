App.Views.FeedView = Backbone.View.extend({
	tagName: "tr",
	render: function() {
		var template = JST["backbone/templates/feeds/feed"];
    $(this.el).html(template(this.model.attributes))
		return this;
	}
});