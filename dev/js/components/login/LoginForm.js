import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FlatButton from 'material-ui/FlatButton';

import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
import { style } from 'typestyle';

const errors = style({
  color: 'red',
})
const containerWidth = style({
  width: '515px',
})
const validate = values => {
  const errors = {}
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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control input-xlarge" {...input} placeholder={label} type={type} />

      {touched && ((error && <span className={errors}>{error}</span>))}
    </div>
  </div>
)

const LoginForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="container containerWidth">
      <div className="row">
        <div className="modal-body">
          <div className="card bg-faded card-block">
            <h3>Login to Your Account</h3>
          </div>
          <div className="card bg-faded card-block">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <Field name="email" type="email" component={renderField} label="Email" />
                  <Field name="password" type="password" component={renderField} label="password" />
                  {error && <strong className={errors}>{error}</strong>}
                  <div>
                    <FlatButton primary={true} type="submit" disabled={submitting}>Login</FlatButton>
                    <FlatButton type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</FlatButton>
                    <FlatButton><Link to="/signup">SignUp</Link></FlatButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default reduxForm({
  form: 'loginForm',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form                     // <--- warning function given to redux-form
})(LoginForm)