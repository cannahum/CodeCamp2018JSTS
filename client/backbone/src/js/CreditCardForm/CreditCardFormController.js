define([
  'backbone',
  './CreditCardFormView'
], function(Backbone, CreditCardFormView) {

  const CreditCardFormController = function() {
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
