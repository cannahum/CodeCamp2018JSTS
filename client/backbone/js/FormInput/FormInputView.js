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
      'focusout': 'onBlur',
      'keyup input.form-input-control': 'onChange',
    },

    initialize: function(opts) {
      this.field = opts.field;
      this.value = '';
    },

    onBlur: function(e) {
      utils.validate(this.field, this.value, this.render.bind(this));
    },

    onChange: function(e) {
      this.value = e.target.value;
      Backbone.Events.trigger('onFormInputChange', {
        field: this.field,
        value: this.value,
      });
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

      this.$el.html(this.template({
        field: this.field,
        value: this.value,
        placeholder: placeholder,
        error: errors && errors[0],
      }));

      return this;
    }
  });

  return FormInputView;
});
