import React from 'react'
import { Field, reduxForm } from 'redux-form'


const validate = values => {
    
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
 }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {console.log("touched : Error :>>",touched,error)}
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)



const SyncValidationForm = function(props){
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="container">
       <div className="row">
          <div className="span12">
          <div className="" id="loginModal">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3>Have an Account?</h3>
                </div>
                <div className="modal-body">
                  <div className="well">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#login" data-toggle="tab">Login</a></li>
                      <li><Link to="/signup">create</Link></li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                      <div className="tab-pane active in" id="login">
                        <form className="form-horizontal" action='' method="POST">
                          <fieldset>
                            <div id="legend">
                              <legend className="">Login</legend>
                            </div>    
                            <div className="control-group">
                            
                              <label className="control-label"  for="username">Username</label>
                              <div className="controls">
                                <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
                              </div>
                            </div>
      
                            <div className="control-group">
                              <label className="control-label" for="password">Password</label>
                              <div className="controls">
                                <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                              </div>
                            </div>
      
      
                            <div className="control-group">
                              <div className="controls">
                                <button className="btn btn-success">Login</button>
                              </div>
                            </div>
                          </fieldset>
                        </form>                
                      </div>
                    
                  </div>
                </div>
              </div>
          </div>
    </div>
   </div>
</div>


  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm)