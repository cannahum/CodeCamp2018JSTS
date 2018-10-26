define(['backbone', './View'], function(Backbone, HelloView) {

  var HelloController = function(opts) {
    this.view = new HelloView(opts);
  };

  HelloController.prototype = {

    show: function() {
      this.view.render();
      $(document.body).html(this.view.el);
    }
  };

  return HelloController;

});
