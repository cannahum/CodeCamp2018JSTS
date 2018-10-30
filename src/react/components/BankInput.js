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
    <div id={`${id}-wrapper`} style={{ padding: '10px' }}>
      <label style={{ marginRight: '10px', display: 'inline-block', minWidth: '150px' }}>{label}</label>
      <input id={id} type="text" value={currentValue} onChange={onChange} onBlur={onBlurEvent}/>
      {
        errors && errors.length > 0
          ? <label style={{ display: 'inline-block', minWidth: '150px', color: 'red', marginLeft: '10px' }}>{errors[0]}</label>
          : null
      }
    </div>
  );
};
