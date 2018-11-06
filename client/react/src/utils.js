import {
  number,
  expirationMonth,
  expirationYear,
  cvv,
} from 'card-validator';

export const validate = (id, value, callback) => {
  let errors = [];
  switch (id) {

    case 'creditCardNumber': {
      const validation = number(value);
      if (!validation.isPotentiallyValid) {
        errors.push('Please Enter a Valid Card Number');
      }
      break;
    }

    case 'month': {
      const validation = expirationMonth(value);
      if (!validation.isPotentiallyValid) {
        errors.push('Please Enter The Month on the Card');
      }
      break;
    }

    case 'year': {
      const validation = expirationYear(value);
      if (!validation.isPotentiallyValid) {
        errors.push('Please Enter The Year on the Card');
      }
      break;
    }

    case 'cvv': {
      const validation = cvv(value);
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
