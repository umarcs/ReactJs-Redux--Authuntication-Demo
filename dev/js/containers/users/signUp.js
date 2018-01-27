import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from "../../actions/Users-Actions";
import Request from 'superagent';
import SignUpForm from '../../components/signup/signupUser';
class SignUp extends React.Component {
    constructor() {
        super();

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(vals) {
        return this.props.signUp(vals)
    }
    render() {
        return ( 
            <div>
                <SignUpForm onSubmit = {this.onSubmitForm}/>
            </div >
        )

    }
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ signUp }, dispatch)
}
export default connect(null,mapDispathToProps)(SignUp)