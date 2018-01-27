import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction, getUserData } from "../../actions/Users-Actions";
import Request from 'superagent';
import LoginForm from '../../components/login/LoginForm'
import { SubmissionError } from 'redux-form'

class Login extends React.Component {
        constructor() {
            super();
            this.submit = this.submit.bind(this)
        }
        submit(vals) {
            return this.props.loginAction(vals)
        }
        render() {
            return (
                <div>
                     <LoginForm onSubmit = { this.submit }/> 
                </div>
            )
        }
}
function mapStateToProps(state) {
    return {
    UserReducers: state.UserReducers,
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ loginAction }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Login)