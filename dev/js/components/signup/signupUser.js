import React from 'react'
import { Field, reduxForm, reducer } from 'redux-form'
import { style } from 'typestyle';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

const errors = style({
  color: 'red',
})

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}



const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input className="form-control input-xlarge" {...input} type={type} placeholder={label} />
        {touched && error && <span className={errors} >{error}</span>}
      </div>
    </div>
  )

const signUp = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="container">
      <div className="row">
        <div className="modal-body">
          <div className="card bg-faded card-block">
            <h3>Create Account</h3>
          </div>
          <br />
          <div className="card bg-faded card-block">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Field
                    name="email"
                    type="text"
                    component={renderField}
                    label="Email"
                  />
                  {error && <strong className={errors}>{error}</strong>}
                </div>
                <div className="col-md-6">
                  <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                  />
                </div>
              </div>
           
                <br />
                <div className="row">
                    <div className="col-md-1">
                      <button className="btn btn-success" type="submit" disabled={submitting}>Sign Up</button>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div className="col-md-1">
                      <button className="btn btn-secondary" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="col-md-1">
                      <FlatButton><Link to="/dashboard">Back</Link></FlatButton>
                    </div>
                  </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  validate,
})(signUp)