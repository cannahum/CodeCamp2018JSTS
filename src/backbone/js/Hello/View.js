define([
  'jquery',
  'backbone',
  'underscore'
], function($, Backbone, _) {

  var Hello = Backbone.View.extend({
    $el: $('#target'),
    template: _.template("<h1>Hello, World!</h1>"),

    render: function() {
      this.$el.html(this.template());
    }
  });

  return Hello;
});
