import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    noValueError: 'Provide a survey title'
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'Please enter a subject line'
  },
  {
    label: 'Email Body',
    name: 'body',
    noValueError: 'Please enter information for recipients'
  },
  {
    label: 'Recipient List',
    name: 'emails',
    noValueError: 'Please enter emails '
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons" right>
              done
            </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
