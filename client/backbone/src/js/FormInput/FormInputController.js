define(['backbone', './FormInputView'], function(Backbone, FormInputView) {

  var FormInputController = function(opts) {
    this.view = new FormInputView(opts);
  };

  FormInputController.prototype = {

    show: function() {
      return this.view.render();
    }
  };

  return FormInputController;

});
