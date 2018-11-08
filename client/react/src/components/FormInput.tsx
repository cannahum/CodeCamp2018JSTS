import React from 'react';
import { validate, ValidationError } from '../utils';

interface IFormInputProps {
  id: string;
  currentValue: string;
  onChange: () => void;
  onValidation: () => void;
  errors: ValidationError[];
}

export default ({ id, currentValue, onChange, onValidation, errors }: IFormInputProps) => {
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

  const onBlurEvent = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();

    validate(id, currentValue, onValidation);
  };

  return (
    <div id={`${id}-wrapper`} className="form-input-wrapper">
      <input id={id}
             className="form-input-control"
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
