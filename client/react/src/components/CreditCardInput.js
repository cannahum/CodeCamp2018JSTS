import React from 'react';
import FormInput from './FormInput';

const CreditCardInput = ({ data: { input, errors }, onChange, onValidation }) => {

  return (
    <FormInput id="creditCardNumber"
      currentValue={input}
      errors={errors}
      onChange={onChange('creditCardNumber')}
      onValidation={onValidation('creditCardNumber')} />
  );
};

export default CreditCardInput;
