import React from 'react';
import { validate } from '../utils';

export default ({ id, currentValue, onChange, onValidation, errors }) => {
  let label;
  switch (id) {
    case 'creditCardNumber': {
      label = 'Credit Card Number';
      break;
    }
    case 'month': {
      label = 'Month';
      break;
    }
    case 'year': {
      label = 'Year';
      break;
    }
    case 'cvv': {
      label = 'CVV';
      break;
    }
  }

  const onBlurEvent = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();

    validate(id, currentValue, onValidation);
  };

  return (
    <div id={`${id}-wrapper`} className="bank-input-wrapper">
      <input id={id}
             className="bank-input-control"
             placeholder={label}
             type="text"
             value={currentValue}
             onChange={onChange}
             onBlur={onBlurEvent}/>
      {
        errors && errors.length > 0
          ? <label className="form-error-label">{errors[0]}</label>
          : null
      }
    </div>
  );
};
