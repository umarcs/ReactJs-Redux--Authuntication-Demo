import React from 'react';
import { bindActionCreators } from 'redux';
import dashboard from '../containers/users/dashboard';
import SingleUserData from '../containers/users/singleUser';
import Login from '../containers/users/login';
import SignUp from '../containers/users/signUp';
import Update from '../containers/users/updateUserData';
import { getUserDataByToken } from '../actions/Users-Actions'



import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token) {
            this.props.getUserDataByToken()
        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch > { /* {(this.props.UserReducers.login) ? <Redirect from="/login"  exact  to='/dashboard' /> : <Redirect from="/dashboard"  exact  to='/login' /> }  */} { /* <Route  path="/dashboard" exact component={dashboard} /> */}
                            {
                                (localStorage.getItem("token"))
                                    ?
                                    < Redirect from="/login" exact to='/dashboard' />
                                    :
                                    < Redirect from="/dashboard" exact to='/login' />
                            }
                            {
                                (localStorage.getItem("token"))
                                    ?
                                    < Route path='/dashboard' exact component={dashboard} />
                                    :
                                    <Redirect from="/dashboard" exact to='/login' />
                            }
                            {
                                (localStorage.getItem("token"))
                                    ?
                                    < Route path='/update' exact component={Update} />
                                    :
                                    <Redirect from="/update" exact to='/login' />
                            }
                            <Route path='/login' component={Login} />
                            <Route path='/signup' exact component={SignUp} />
                            <Route path='/single' exact component={SingleUserData} />

                            { /* <Redirect from='/' exact to='about/city' />  */} { /* <Route  render={()=>{return(<h1>error loading page</h1>)} } /> */}
                            <Route path="*" render={() => <h1> Not Found </h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("state", state)
    return {
        UserReducers: state.UserReducers,
    };
}


function mapDispathToProps(dispatch) {
    return bindActionCreators({ getUserDataByToken }, dispatch)
}
export default connect(mapStateToProps, mapDispathToProps)(App);