import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update } from "../../actions/Users-Actions";
import Request from 'superagent';
import UpdateForm from '../../components/update/updateUserData'
import { SubmissionError } from 'redux-form'

class Login extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this)
    }
    submit(vals) {
        console.log("vals <<<<<",vals)
        let data = {
            id : vals.id,
            firstName : vals.firstName,
            lastName : vals.lastName
        }
        this.props.update(data)
    }
    render() {
        return ( 
            <div >
                <UpdateForm onSubmit = { this.submit }  />
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
    return bindActionCreators({ update }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Login);