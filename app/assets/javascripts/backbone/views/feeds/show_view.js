App.Views.ShowView = Backbone.View.extend({
	render: function() {
		var template = '<b>From name:</b><em>[from_name]</em><b>message:</b><em>[message]</em><a href="#">home</a>';
		
		var view = template.replace('[from_name]', this.model.attributes.from_name).replace('[message]', this.model.attributes.message);
		$(this.el).html(view);
		return this;
	}
});