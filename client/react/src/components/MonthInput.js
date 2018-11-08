import React from 'react';
import FormInput from './FormInput';

const MonthInput = ({ data: { input, errors }, onChange, onValidation }) => {

  return (
    <FormInput id="month"
      currentValue={input}
      errors={errors}
      onChange={onChange('month')}
      onValidation={onValidation('month')} />
  );
};

export default MonthInput;
