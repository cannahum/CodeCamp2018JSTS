import React from 'react';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

export default class CreditCardForm extends React.Component {

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
      <div className="card">
        <div id="bank-form-container">
          <h2>Please enter your information</h2>
          <div id="form-group">
            <FormInput id="creditCardNumber"
                       currentValue={creditCardNumber.input}
                       errors={creditCardNumber.errors}
                       onChange={this.onInputChange('creditCardNumber')}
                       onValidation={this.onInputBlurValidation('creditCardNumber')}/>
            <FormInput id="month"
                       currentValue={month.input}
                       errors={month.errors}
                       onChange={this.onInputChange('month')}
                       onValidation={this.onInputBlurValidation('month')}/>
            <FormInput id="year"
                       currentValue={year.input}
                       errors={year.errors}
                       onChange={this.onInputChange('year')}
                       onValidation={this.onInputBlurValidation('year')}/>
            <FormInput id="cvv"
                       currentValue={cvv.input}
                       errors={cvv.errors}
                       onChange={this.onInputChange('cvv')}
                       onValidation={this.onInputBlurValidation('cvv')}/>
          </div>
          <SubmitButton onClick={this.onSubmitButtonClick}/>
        </div>
      </div>
    );
  }
}
