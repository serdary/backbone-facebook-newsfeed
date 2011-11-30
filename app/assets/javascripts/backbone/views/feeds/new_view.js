App.Views.NewView = Backbone.View.extend({
	initialize: function() {
		this.collection = this.options.collection;
		this.model = new this.collection.model();
	}, 
	
	events: {
		'submit #new-feed' : 'save'
	},
	
	render: function() {
		var template = '<h1>New feed</h1><form id="new-feed" name="feed"><div><b> message:</b><input type="text" name="message" id="message" /></div><div><input type="submit" value="Create Feed" /></div></form><a href="#">Home</a>';
		
		$(this.el).html(template);
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