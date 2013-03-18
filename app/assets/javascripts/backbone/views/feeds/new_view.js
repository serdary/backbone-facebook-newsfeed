App.Views.NewView = Backbone.View.extend({
	initialize: function() {
		this.collection = this.options.collection;
		this.model = new this.collection.model();
	}, 
	
	events: {
		'submit #new-feed' : 'save'
	},
	
	render: function() {
		var template = JST["backbone/templates/feeds/new"];
    $(this.el).html(template(this.model.attributes))
		return this;
	},
	
	save: function() {
		this.collection.create({ message: $('#message').val() }, {
			success: function(feed) {
	  			this.model = feed;
	  			//window.location.hash = '#/' + this.model.id
	  			window.location.hash = '#'
  			},
  			error: function(feed) {
  			}
  		});
  		
  		return false;
	}
});