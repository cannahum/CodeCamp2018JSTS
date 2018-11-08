import React from 'react';
import FormInput from './FormInput';
import { ValidationError } from '../utils';

interface IInputComponentProps {
  data: {
    input: string;
    errors: ValidationError[];
  }
  onChange: (inputField: string) => (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onValidation: (inputField: string) => (errors: ValidationError[]) => void;
}

const YearInput = ({ data: { input, errors }, onChange, onValidation }: IInputComponentProps) => {

  return (
    <FormInput id="year"
      currentValue={input}
      errors={errors}
      onChange={onChange('year')}
      onValidation={onValidation('year')} />
  );
};

export default YearInput;
