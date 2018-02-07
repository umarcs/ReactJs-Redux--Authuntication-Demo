import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';
import { update } from "../../actions/Users-Actions";
import Request from 'superagent';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import { style } from 'typestyle';

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


let Update = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props
  return (
    <div className="container containerWidth">
      <div className="row">
        <div className="modal-body">
          <div className="card bg-faded card-block">
            <h3>Update Your Data</h3>
          </div>
          <br />
          <div className="card bg-faded card-block">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                    <Field
                      name="firstName"
                      component={renderField}
                      type="text"
                      label="First Name"
                    />
                  </div>
                <div className="col-md-6">
                    <Field
                      name="lastName"
                      component={renderField}
                      type="text"
                      label="Last Name"
                    />
                </div>
              </div>

              <br />
              <div className="row">
                  <div className="col-md-1">
                    <button className="btn btn-success" type="submit" disabled={pristine || submitting}>Update</button>
                  </div>&nbsp;&nbsp;
                  <div className="col-md-1">
                    <button className="btn btn-secondary" type="button" disabled={pristine || submitting} onClick={reset}>  Clear Values
                           </button>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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


function mapStateToProps(state) {
  return {
    UserReducers: state.UserReducers.loginUser,
    initialValues: state.UserReducers.loginUser
  };
}
function mapDispathToProps(dispatch) {
  return bindActionCreators({ update }, dispatch)
}

Update = reduxForm({
  form: 'update form', // a unique identifier for this form
  enableReinitialize: true,
  validate

})(Update)

export default connect(mapStateToProps, mapDispathToProps)(Update)











