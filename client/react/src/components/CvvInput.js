import React from 'react';
import FormInput from './FormInput';

const CvvInput = ({ data: { input, errors }, onChange, onValidation }) => {

  return (
    <FormInput id="cvv"
      currentValue={input}
      errors={errors}
      onChange={onChange('cvv')}
      onValidation={onValidation('cvv')} />
  );
};

export default CvvInput;
