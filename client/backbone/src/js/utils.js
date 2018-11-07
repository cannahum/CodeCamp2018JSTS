define([
  'card-validator'
], function(cardValidator) {

  var validate = function(id, value, callback) {

    var errors = [];
    switch (id) {

      case 'creditCardNumber': {
        var validation = cardValidator.number(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter a Valid Card Number');
        }
        break;
      }

      case 'month': {
        var validation = cardValidator.expirationMonth(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter The Month on the Card');
        }
        break;
      }

      case 'year': {
        var validation = cardValidator.expirationYear(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter The Year on the Card');
        }
        break;
      }

      case 'cvv': {
        var validation = cardValidator.cvv(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter the CVV Number on the Back of Your Card');
        }
        break;
      }

      default: {
        throw Error('What is this id? ' + id);
      }

    }
    callback(errors);
  };

  return {
    validate: validate,
  };

});
