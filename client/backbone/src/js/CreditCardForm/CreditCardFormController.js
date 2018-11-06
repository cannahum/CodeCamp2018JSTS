define([
  'backbone',
  './CreditCardFormView'
], function(Backbone, CreditCardFormView) {

  var CreditCardFormController = function() {
    this.view = new CreditCardFormView({
      el: $('#target'),
    });
  };

  CreditCardFormController.prototype = {

    show: function() {
      this.view.render();
    }
  };

  return CreditCardFormController;

});
