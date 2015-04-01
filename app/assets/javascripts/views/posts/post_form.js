Journal.Views.PostForm = Backbone.View.extend({

  template: JST['posts/postForm'],
  urlRoot: "/posts/new",
  events: {'submit .post-form': 'submitForm'},

  initialize: function(){
  },

  render: function() {
    this.$el.html(this.template({post: new this.model()}));
    return this;
  },

  submitForm: function(event) {
    event.preventDefault();
    var newModel = new this.model($(event.currentTarget).serializeJSON());
    newModel.save({}, {
      success: function () {
        Backbone.history.navigate("#", { trigger: true });
      },
      error: function (model, response) {
        this.$el.html(this.template({post: newModel}));
        var errorBlock = "<ul class='errors'>";
        $(response.responseJSON).each(function(index, message){
          errorBlock += "<li>"+message+"</li>";
        });
        errorBlock +="</ul>";
        this.$el.prepend(errorBlock);
      }.bind(this)
    });
  }

});
