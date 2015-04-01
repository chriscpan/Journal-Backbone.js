Journal.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],
  urlRoot: "/posts",

  // initialize: function(){
  // },

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  }

});
