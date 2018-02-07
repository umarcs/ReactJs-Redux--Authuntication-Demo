import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserData, logout } from '../../actions/Users-Actions';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form'
import { setTimeout } from 'timers';

class UserData extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)
    }
    logout() {
        this.props.logout()
    }
    render() {
        const obj = this.props.UserReducers.loginUser
        return (
            (this.props.UserReducers.loginUser) ?
                <div className="container">
                    <div className="row">
                        <div className="modal-body">
                            <div className="card bg-faded card-block">
                                <h1>Welcome TO Dashboard</h1>
                            </div><br />
                            <div className="card bg-faded card-block">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.props.UserReducers.loginUser.firstName}</td>
                                            <td>{this.props.UserReducers.loginUser.lastName}</td>
                                            <td>{this.props.UserReducers.loginUser.email}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-md-1">
                                <button type="button" className="btn btn-link"><Link to="/update">Update</Link></button>
                            </div>
                            <div className="col-md-1">
                                <button type="button" onClick={this.logout} className="btn btn-primary">Logout</button>
                            </div>
                        </div>
                </div>
                :
                <h2>Loading...</h2>
        )
    }
}
// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {

    return {
        UserReducers: state.UserReducers,
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getUserData, logout }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(UserData);




