var Journal = window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    this.posts = new Journal.Collections.Posts();
    this.router = new Journal.Routers.Posts({
      collection: this.posts,
      $el: $('body')
    });
    Backbone.history.start();
    // $('body').append(new Journal.Views.PostsIndex({
    //     collection: this.posts
    //   }).render().$el);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
