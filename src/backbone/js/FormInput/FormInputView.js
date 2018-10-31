define([
  'jquery',
  'backbone',
  'underscore',
  'text!./template.html',
  '../utils'
], function($, Backbone, _, templateString, utils) {

  var FormInputView = Backbone.View.extend({
    template: _.template(templateString),

    events: {
      'focusout': 'onBlur'
    },

    initialize: function(opts) {
      this.field = opts.field;
    },

    onBlur: function(e) {
      e.preventDefault();
      utils.validate(this.field, e.target.value, this.render.bind(this));
    },

    render: function(errors) {
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
        placeholder: placeholder,
        error: errors[0],
      }));

      return this;
    }
  });

  return FormInputView;
});
