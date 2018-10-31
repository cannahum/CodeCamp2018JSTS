define([
  'card-validator'
], function(cardValidator) {

  const validate = function(id, value, callback) {

    let errors = [];
    switch (id) {

      case 'creditCardNumber': {
        const validation = cardValidator.number(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter a Valid Card Number');
        }
        break;
      }

      case 'month': {
        const validation = cardValidator.expirationMonth(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter The Month on the Card');
        }
        break;
      }

      case 'year': {
        const validation = cardValidator.expirationYear(value);
        if (!validation.isPotentiallyValid) {
          errors.push('Please Enter The Year on the Card');
        }
        break;
      }

      case 'cvv': {
        const validation = cardValidator.cvv(value);
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
