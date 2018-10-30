import React from 'react';
import BankInput from './BankInput';
import SubmitButton from './SubmitButton';

export default class BankForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      creditCardNumber: {
        input: '',
        errors: [],
      },
      month: {
        input: '',
        errors: [],
      },
      year: {
        input: '',
        errors: [],
      },
      cvv: {
        input: '',
        errors: [],
      },
    };
  }

  onInputChange = (field) => {
    return (e) => {
      e.preventDefault();
      e.nativeEvent.preventDefault();

      const { target: { value } } = e;

      const newState = {
        [field]: {}
      };
      newState[field].input = value;
      newState[field].errors = this.state[field].errors;

      this.setState(newState);
    }
  };

  onInputBlurValidation = (field) => {
    return (errors) => {
      const newState = {
        [field]: {}
      };

      newState[field].input = this.state[field].input;
      newState[field].errors = errors;

      this.setState(newState);
    };
  };

  onSubmitButtonClick = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();

    // Do stuff.
  };

  render() {

    const { creditCardNumber, month, year, cvv } = this.state;

    return (
      <div id="bank-form">
        <h2>Please enter your information</h2>
        <BankInput id="creditCardNumber"
                   currentValue={creditCardNumber.input}
                   errors={creditCardNumber.errors}
                   onChange={this.onInputChange('creditCardNumber')}
                   onValidation={this.onInputBlurValidation('creditCardNumber')}/>
        <BankInput id="month"
                   currentValue={month.input}
                   errors={month.errors}
                   onChange={this.onInputChange('month')}
                   onValidation={this.onInputBlurValidation('month')}/>
        <BankInput id="year"
                   currentValue={year.input}
                   errors={year.errors}
                   onChange={this.onInputChange('year')}
                   onValidation={this.onInputBlurValidation('year')}/>
        <BankInput id="cvv"
                   currentValue={cvv.input}
                   errors={cvv.errors}
                   onChange={this.onInputChange('cvv')}
                   onValidation={this.onInputBlurValidation('cvv')}/>
        <SubmitButton onClick={this.onSubmitButtonClick}/>
      </div>
    );
  }
}
