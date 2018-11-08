import React from 'react';
import CreditCardInput from './CreditCardInput';
import MonthInput from './MonthInput';
import YearInput from './YearInput';
import CvvInput from './CvvInput';
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
        <div id="form-container">
          <h2>Please enter your information</h2>
          <div id="form-group">
            <CreditCardInput onChange={this.onInputChange} onValidation={this.onInputBlurValidation} data={creditCardNumber} />
            <MonthInput onChange={this.onInputChange} onValidation={this.onInputBlurValidation} data={month} />
            <YearInput onChange={this.onInputChange} onValidation={this.onInputBlurValidation} data={year} />
            <CvvInput onChange={this.onInputChange} onValidation={this.onInputBlurValidation} data={cvv} />
          </div>
          <SubmitButton onClick={this.onSubmitButtonClick}/>
        </div>
      </div>
    );
  }
}
