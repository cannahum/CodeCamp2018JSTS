import React from 'react';
import FormInput from './FormInput';

const YearInput = ({ data: { input, errors }, onChange, onValidation }) => {

  return (
    <FormInput id="year"
      currentValue={input}
      errors={errors}
      onChange={onChange('year')}
      onValidation={onValidation('year')} />
  );
};

export default YearInput;
