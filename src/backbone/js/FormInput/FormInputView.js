define([
  'jquery',
  'backbone',
  'underscore',
  'text!./template.html'
], function($, Backbone, _, templateString) {

  var FormInputView = Backbone.View.extend({
    template: _.template(templateString),

    initialize: function(opts) {
      this.field = opts.field;
    },

    render: function() {
      var placeholder;

      switch (this.field) {
        case 'creditCardNumber': {
          placeholder = 'Credit Card Number';
          break;
        }
        case 'month': {
          placeholder = 'Month';
          break;
        }
        case 'year': {
          placeholder = 'Year';
          break;
        }
        case 'cvv': {
          placeholder = 'CVV';
          break;
        }
      }

      this.$el.append(this.template({
        placeholder: placeholder
      }));

      return this;
    }
  });

  return FormInputView;
});
