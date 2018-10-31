define([
  'jquery',
  'backbone',
  'underscore',
  'text!./template.html',
  '../FormInput/FormInputController'
], function($, Backbone, _, templateString, FormInputController) {

  var CreditCardFormView = Backbone.View.extend({
    template: _.template(templateString),

    render: function() {
      this.$el.append(this.template());

      this.creditCardNumberInput = new FormInputController({
        el: $('#creditCardNumber-wrapper'),
        field: 'creditCardNumber',
      });
      this.monthInput = new FormInputController({
        el: $('#month-wrapper'),
        field: 'month',
      });
      this.yearInput = new FormInputController({
        el: $('#year-wrapper'),
        field: 'year',
      });
      this.cvvInput = new FormInputController({
        el: $('#cvv-wrapper'),
        field: 'cvv',
      });

      this.creditCardNumberInput.show();
      this.monthInput.show();
      this.yearInput.show();
      this.cvvInput.show();

      return this;
    }
  });

  return CreditCardFormView;
});
