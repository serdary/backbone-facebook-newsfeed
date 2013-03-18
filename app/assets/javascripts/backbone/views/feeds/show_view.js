App.Views.ShowView = Backbone.View.extend({
	render: function() {
		var template = JST["backbone/templates/feeds/show"];
    $(this.el).html(template(this.model.attributes))
		return this;
	}
});